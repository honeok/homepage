"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SITE } from "@/config";
import { useDynamicTheme } from "@/lib/use-dynamic-theme";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  useDynamicTheme(SITE.avatar);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={props.forcedTheme}
      themes={["light", "dark"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
