import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
