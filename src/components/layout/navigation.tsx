import { motion } from 'motion/react'
import Image from 'next/image'
import { SITE } from '@/config'

export function Navigation() {
  return (
    <nav className="fixed top-4 left-4 md:top-8 md:left-8 z-40">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
          rotate: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
        className="text-xl font-medium"
      >
        <Image src={SITE.logo} alt="Logo" width={40} height={40} priority />
      </motion.div>
    </nav>
  )
}
