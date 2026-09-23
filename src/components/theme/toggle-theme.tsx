'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/packages/ui/button'
import { cn } from '@/lib/utils'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // The theme toggle renders only after hydration to avoid a theme mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!isMounted) {
    return null
  }

  return (
    <motion.div
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeToggle}
        className={cn(
          'rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm',
          'border-primary/20 shadow-lg hover:shadow-primary/20 hover:border-primary/40',
          'hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden',
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {resolvedTheme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}
