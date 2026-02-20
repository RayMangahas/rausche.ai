"use client";

// Face detection for SoftSpace avatar uploads
// Strategy:
// 1. Try browser's native FaceDetector API (Chrome/Edge — fast, no downloads)
// 2. Fall back to face-api.js tiny model from CDN
// 3. If BOTH fail → reject the photo (strict mode)

// ─── Native FaceDetector (Chrome/Edge) ───

async function detectWithNativeAPI(img: HTMLImageElement): Promise<{ hasFaces: boolean; faceCount: number } | null> {
  try {
    // Check if native FaceDetector is available
    if (!("FaceDetector" in window)) return null;

    const detector = new (window as any).FaceDetector({ fastMode: true, maxDetectedFaces: 5 });
    const faces = await detector.detect(img);
    return { hasFaces: faces.length > 0, faceCount: faces.length };
  } catch {
    return null; // API not available or failed
  }
}

// ─── face-api.js fallback ───

let faceApiState: "idle" | "loading" | "ready" | "failed" = "idle";
let faceApiPromise: Promise<void> | null = null;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

async function initFaceApi(): Promise<boolean> {
  if (faceApiState === "ready") return true;
  if (faceApiState === "failed") return false;
  if (faceApiState === "loading" && faceApiPromise) {
    await faceApiPromise;
    return faceApiState === "ready";
  }

  faceApiState = "loading";
  faceApiPromise = (async () => {
    try {
      await loadScript("https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js");

      const faceapi = (window as any).faceapi;
      if (!faceapi) throw new Error("face-api.js not on window");

      // Try multiple CDN sources for model weights
      const modelUrls = [
        "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",
        "https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights",
      ];

      let loaded = false;
      for (const url of modelUrls) {
        try {
          await faceapi.nets.tinyFaceDetector.loadFromUri(url);
          loaded = true;
          break;
        } catch {
          continue;
        }
      }

      if (!loaded) throw new Error("Could not load model weights from any CDN");

      faceApiState = "ready";
    } catch (err) {
      console.error("face-api.js init failed:", err);
      faceApiState = "failed";
    }
  })();

  await faceApiPromise;
  return faceApiState === "ready";
}

async function detectWithFaceApi(img: HTMLImageElement): Promise<{ hasFaces: boolean; faceCount: number } | null> {
  const ready = await initFaceApi();
  if (!ready) return null;

  try {
    const faceapi = (window as any).faceapi;
    const detections = await faceapi.detectAllFaces(
      img,
      new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.25 })
    );
    return { hasFaces: detections.length > 0, faceCount: detections.length };
  } catch {
    return null;
  }
}

// ─── Simple skin-tone heuristic as last resort ───

function detectWithHeuristic(img: HTMLImageElement): { hasFaces: boolean; faceCount: number; confidence: "low" } {
  try {
    const canvas = document.createElement("canvas");
    const size = 100; // Downsample for speed
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return { hasFaces: false, faceCount: 0, confidence: "low" };

    ctx.drawImage(img, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;

    let skinPixels = 0;
    const totalPixels = size * size;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      // Broad skin tone detection across different skin colors
      if (
        r > 60 && g > 40 && b > 20 &&
        r > g && r > b &&
        (r - g) > 10 &&
        Math.abs(r - g) < 100 &&
        r < 250 && g < 230 && b < 210
      ) {
        skinPixels++;
      }
    }

    const skinRatio = skinPixels / totalPixels;
    // If more than 30% of image is skin-toned, likely contains a person
    return { hasFaces: skinRatio > 0.30, faceCount: skinRatio > 0.30 ? 1 : 0, confidence: "low" };
  } catch {
    return { hasFaces: false, faceCount: 0, confidence: "low" };
  }
}

// ─── Main detection function ───

export async function detectFaces(imageUrl: string): Promise<{
  hasFaces: boolean;
  faceCount: number;
  method: string;
  error?: string;
}> {
  // Create image element
  const img = new Image();
  img.crossOrigin = "anonymous";

  try {
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Image load failed"));
      img.src = imageUrl;
    });
  } catch {
    return { hasFaces: true, faceCount: 0, method: "error", error: "Could not load image for scanning" };
  }

  // Method 1: Native FaceDetector API (Chrome/Edge)
  const nativeResult = await detectWithNativeAPI(img);
  if (nativeResult) {
    return { ...nativeResult, method: "native" };
  }

  // Method 2: face-api.js
  const faceApiResult = await detectWithFaceApi(img);
  if (faceApiResult) {
    return { ...faceApiResult, method: "face-api" };
  }

  // Method 3: Skin tone heuristic (last resort)
  const heuristicResult = detectWithHeuristic(img);
  if (heuristicResult.hasFaces) {
    return {
      hasFaces: true,
      faceCount: 1,
      method: "heuristic",
      error: "AI detection unavailable, but this image may contain a person",
    };
  }

  // If NO detection method could confirm faces, but ML models failed to load,
  // be strict and flag it as unverifiable
  return {
    hasFaces: false,
    faceCount: 0,
    method: "heuristic",
    error: "AI face detection couldn't load — photo accepted, but please ensure no faces",
  };
}
