import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { getColor, getSwatches } from "colorthief";

import { SITE } from "@/config";

const COLOR_EXTRACTION_OPTIONS = {
  colorCount: 8, // 提取 8 个候选颜色
  colorSpace: "rgb", // 使用 RGB 色彩空间
} as const;

interface ThemeColors {
  primary: string;
  secondary: string;
}

function rgbToRgba(rgb: readonly [number, number, number]) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
}

export async function getThemeColors(): Promise<ThemeColors | null> {
  // 将站点头像 URL 映射到 public 下的本地文件, 供构建阶段直接读取
  const avatarPath = path.join(process.cwd(), "public", SITE.avatar.replace(/^\/+/, ""));
  let avatar: Buffer;

  try {
    avatar = await readFile(avatarPath);
  } catch (error) {
    if (!(error instanceof Error)) throw error;

    console.warn(`[theme-colors] Unable to read avatar at ${avatarPath}: ${error.message}`);
    return null;
  }

  try {
    const dominantColor = await getColor(avatar, COLOR_EXTRACTION_OPTIONS); // 提取主导色作为回退色

    if (!dominantColor) {
      console.warn(`[theme-colors] Unable to extract a dominant color from ${avatarPath}`);
      return null;
    }

    const swatches = await getSwatches(avatar, COLOR_EXTRACTION_OPTIONS); // 提取语义色板
    const primaryColor = swatches.Muted?.color ?? dominantColor; // 主色: 柔和色
    const secondaryColor = swatches.LightMuted?.color ?? primaryColor; // 次色: 浅柔和色

    return {
      primary: rgbToRgba(primaryColor.array()),
      secondary: rgbToRgba(secondaryColor.array()),
    };
  } catch (error) {
    if (!(error instanceof Error)) throw error;

    console.warn(`[theme-colors] Unable to extract theme colors from ${avatarPath}: ${error.message}`);
    return null;
  }
}
