"use client";

import { useEffect } from "react";
import { getColorSync, getSwatchesSync } from "colorthief";

const COLOR_EXTRACTION_OPTIONS = {
  colorCount: 8, // 提取 8 个候选颜色
  colorSpace: "rgb", // 使用 RGB 色彩空间
} as const;

function rgbToRgba(rgb: number[], alpha = 1) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

export function useDynamicTheme(avatarUrl: string) {
  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = avatarUrl;

    image.onload = () => {
      const dominantColor = getColorSync(image, COLOR_EXTRACTION_OPTIONS); // 基础色

      if (!dominantColor) return; // 取色失败时保留默认主题色

      const swatches = getSwatchesSync(image, COLOR_EXTRACTION_OPTIONS); // 提取语义色板
      const primaryColor = swatches.Muted?.color ?? dominantColor; // 主色: 柔和色
      const secondaryColor = swatches.LightMuted?.color ?? primaryColor; // 次色: 浅柔和色
      const rootStyle = document.documentElement.style;

      rootStyle.setProperty("--theme-primary", rgbToRgba(primaryColor.array()));
      rootStyle.setProperty("--theme-secondary", rgbToRgba(secondaryColor.array()));
    };
  }, [avatarUrl]);
}
