"use client";

// Face detection using face-api.js tiny face detector (~190KB model)
// Runs entirely in the browser — no server calls needed

let faceApiLoaded = false;
let faceApiLoading = false;
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
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function initFaceApi(): Promise<void> {
  if (faceApiLoaded) return;
  if (faceApiLoading && faceApiPromise) return faceApiPromise;

  faceApiLoading = true;
  faceApiPromise = (async () => {
    try {
      await loadScript(
        "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"
      );

      const faceapi = (window as any).faceapi;
      if (!faceapi) throw new Error("face-api.js failed to load");

      // Load tiny face detector model from CDN
      const MODEL_URL =
        "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);

      faceApiLoaded = true;
    } catch (err) {
      console.error("Failed to init face-api:", err);
      faceApiLoading = false;
      throw err;
    }
  })();

  return faceApiPromise;
}

export async function detectFaces(imageUrl: string): Promise<{
  hasFaces: boolean;
  faceCount: number;
  error?: string;
}> {
  try {
    await initFaceApi();

    const faceapi = (window as any).faceapi;
    if (!faceapi) {
      return { hasFaces: false, faceCount: 0, error: "Face detection unavailable" };
    }

    // Create image element to scan
    const img = new Image();
    img.crossOrigin = "anonymous";

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Image load failed"));
      img.src = imageUrl;
    });

    // Run face detection — low threshold catches more faces for safety
    const detections = await faceapi.detectAllFaces(
      img,
      new faceapi.TinyFaceDetectorOptions({
        inputSize: 320,
        scoreThreshold: 0.3,
      })
    );

    return {
      hasFaces: detections.length > 0,
      faceCount: detections.length,
    };
  } catch (err) {
    console.error("Face detection error:", err);
    return {
      hasFaces: false,
      faceCount: 0,
      error: "Could not verify — please ensure no faces are in the photo",
    };
  }
}
