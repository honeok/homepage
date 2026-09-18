import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/toggle-theme";
import { ANALYTICS, SITE } from "@/config";
import { getThemeColors } from "@/lib/theme-colors";

import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

// 允许使用自定义主题变量
type ThemeStyle = React.CSSProperties & {
  "--theme-primary": string;
  "--theme-secondary": string;
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: SITE.logo,
    shortcut: SITE.logo,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const themeColors = await getThemeColors(); // 在静态生成阶段提取全站主题色
  const themeStyle: ThemeStyle | undefined = themeColors
    ? {
        "--theme-primary": themeColors.primary,
        "--theme-secondary": themeColors.secondary,
      }
    : undefined;

  return (
    <html lang={SITE.lang} className="h-full" style={themeStyle} suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModeToggle />
          {children}
        </ThemeProvider>

        {ANALYTICS !== null && <Script src={ANALYTICS.src} data-website-id={ANALYTICS.websiteId} />}
      </body>
    </html>
  );
}
