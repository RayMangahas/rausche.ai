import { createClient } from "@/lib/supabase/client";

const supabase = createClient();
const BUCKET = "user-content";

/**
 * Upload a cropped avatar image to Supabase Storage.
 * Returns the public URL or null on failure.
 */
export async function uploadAvatar(
  userId: string,
  blob: Blob
): Promise<string | null> {
  const ext = "jpg";
  const filePath = `${userId}/profile-photo/avatar-${Date.now()}.${ext}`;

  // Delete old profile photos for this user first
  try {
    const { data: existing } = await supabase.storage
      .from(BUCKET)
      .list(`${userId}/profile-photo`);
    if (existing && existing.length > 0) {
      const toDelete = existing.map((f) => `${userId}/profile-photo/${f.name}`);
      await supabase.storage.from(BUCKET).remove(toDelete);
    }
  } catch {
    // Ignore cleanup errors
  }

  // Upload new avatar
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, blob, {
      contentType: "image/jpeg",
      upsert: true,
    });

  if (error) {
    console.error("Avatar upload error:", error);
    return null;
  }

  // Get public URL
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Crop an image from a source URL using canvas.
 * Returns a JPEG Blob of the cropped area.
 */
export function cropImageToBlob(
  imageSrc: string,
  crop: { x: number; y: number; scale: number },
  outputSize: number = 400
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = outputSize;
      canvas.height = outputSize;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("No canvas context"));

      // Calculate crop area
      const displaySize = outputSize;
      const sourceSize = displaySize / crop.scale;
      const sourceX = -crop.x / crop.scale + (img.width - sourceSize) / 2;
      const sourceY = -crop.y / crop.scale + (img.height - sourceSize) / 2;

      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceSize,
        sourceSize,
        0,
        0,
        outputSize,
        outputSize
      );

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Failed to create blob"));
        },
        "image/jpeg",
        0.9
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageSrc;
  });
}
