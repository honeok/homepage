import * as motion from 'motion/react-client'

import { SITE } from '@/config'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative z-10 mt-auto mx-6 sm:mx-10 md:mx-14 pt-6 pb-4 md:pb-8 text-center text-[#121212]/60 dark:text-white/60 text-[0.92rem]"
    >
      <p>
        © {new Date().getFullYear()} {SITE.author}. All rights reserved.
      </p>
    </motion.footer>
  )
}
