"use client";

import { useEffect } from "react";
import ColorThief from "color-thief-browser";

function rgbToRgba(rgb: number[], alpha = 1) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

export function useDynamicTheme(avatarUrl: string) {
  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = avatarUrl;

    image.onload = () => {
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(image); // 主色
      const colorPalette = colorThief.getPalette(image, 3); // 取更多颜色

      const [primaryColor, secondaryColor = dominantColor] = [dominantColor, colorPalette[1]];
      const rootStyle = document.documentElement.style;

      // console.log(primaryColor);
      // console.log(secondaryColor);

      rootStyle.setProperty("--theme-primary", rgbToRgba(primaryColor));
      rootStyle.setProperty("--theme-secondary", rgbToRgba(secondaryColor));
    };
  }, [avatarUrl]);
}
