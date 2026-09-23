import type { CSSProperties, ReactNode } from 'react'

import { Footer } from '@/components/layout/footer'
import { ModeToggle } from '@/components/theme/mode-toggle'

interface PageShellProps {
  children: ReactNode
  style?: CSSProperties
}

export function PageShell({ children, style }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col" style={style}>
      <ModeToggle />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  )
}
