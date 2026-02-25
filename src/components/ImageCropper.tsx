"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface ImageCropperProps {
  imageSrc: string;
  onCrop: (crop: { x: number; y: number; scale: number }) => void;
  onCancel: () => void;
}

export default function ImageCropper({ imageSrc, onCrop, onCancel }: ImageCropperProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgDimensions, setImgDimensions] = useState({ w: 0, h: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const CROP_SIZE = 280;

  // Load image dimensions
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgDimensions({ w: img.width, h: img.height });
      // Set initial scale to fit the smaller dimension into the crop area
      const minDim = Math.min(img.width, img.height);
      const initialScale = CROP_SIZE / minDim;
      setScale(initialScale * 1.1); // Slightly zoomed so they can adjust
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  }, [position]);

  const handleMouseMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    });
  }, [dragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) => Math.max(0.1, Math.min(5, prev - e.deltaY * 0.001)));
  }, []);

  const handleConfirm = () => {
    onCrop({ x: position.x, y: position.y, scale });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(8px)" }}>
      <div className="flex flex-col items-center w-full max-w-[360px] px-5">
        <p className="text-white text-[15px] mb-4">Drag to reposition</p>

        {/* Crop area */}
        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            width: CROP_SIZE,
            height: CROP_SIZE,
            borderRadius: "50%",
            border: "2px solid rgba(232, 139, 62, 0.5)",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          onWheel={handleWheel}
        >
          <img
            src={imageSrc}
            alt="Crop preview"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              width: imgDimensions.w * scale,
              height: imgDimensions.h * scale,
              left: `calc(50% + ${position.x}px - ${(imgDimensions.w * scale) / 2}px)`,
              top: `calc(50% + ${position.y}px - ${(imgDimensions.h * scale) / 2}px)`,
              maxWidth: "none",
            }}
          />
        </div>

        {/* Zoom slider */}
        <div className="flex items-center gap-3 mt-5 w-full">
          <span className="text-[#A0A0A0] text-[11px]">−</span>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.01"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #E88B3E ${((scale - 0.1) / 4.9) * 100}%, #333 ${((scale - 0.1) / 4.9) * 100}%)`,
            }}
          />
          <span className="text-[#A0A0A0] text-[11px]">+</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6 w-full">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-[#2A2A2A] text-[13px] text-[#C0C0C0] hover:bg-[#1A1A1A] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 rounded-xl bg-[#E88B3E] text-white text-[13px] hover:bg-[#CC5C3F] transition-colors"
          >
            Use Photo
          </button>
        </div>
      </div>
    </div>
  );
}
