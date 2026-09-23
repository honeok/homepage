import type { CSSProperties } from 'react'

import { Home } from '@/components/home/home'
import { PageShell } from '@/components/layout/page-shell'
import { getSocialIconStyles } from '@/lib/icons'
import { getThemeColors } from '@/lib/theme-colors'

type ThemeStyle = CSSProperties & {
  '--theme-primary': string
  '--theme-secondary': string
}

export default async function Page() {
  const [iconStyles, themeColors] = await Promise.all([getSocialIconStyles(), getThemeColors()])
  const themeStyle: ThemeStyle | undefined = themeColors
    ? {
        '--theme-primary': themeColors.primary,
        '--theme-secondary': themeColors.secondary,
      }
    : undefined

  return (
    <PageShell style={themeStyle}>
      <Home iconStyles={iconStyles} />
    </PageShell>
  )
}
