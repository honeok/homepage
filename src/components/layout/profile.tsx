import { motion } from "framer-motion";
import Image from "next/image";
import { SITE, SOCIAL_LINKS } from "@/config";
import { cn } from "@/lib/utils";

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center h-full flex-1 my-auto pt-24 md:pt-16"
    >
      {/* Profile image */}
      <motion.div
        className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-3xl bg-gradient-to-br",
            "from-[var(--theme-primary)] to-[var(--theme-secondary)]",
            "opacity-80 dark:opacity-60 blur-md transform -rotate-6 scale-95",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 rounded-3xl overflow-hidden border-2",
            "border-[#121212]/10 dark:border-white/10",
            "bg-[#f8f8f8] dark:bg-[#1a1a1a]",
          )}
        >
          <Image
            src={SITE.avatar}
            alt={SITE.author}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Profile info */}
      <div className="space-y-12 text-center md:text-left">
        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
              "flex flex-wrap items-center justify-center md:justify-start",
            )}
          >
            {[..."Hello, ".split(""), ...("I'm " + SITE.author).split("")].map((char, index) => (
              <motion.span
                key={`title-${index}`}
                className={cn(
                  "inline-block",
                  index >= 7 && "text-[var(--theme-primary)] dark:text-[var(--theme-secondary)]",
                )}
                animate={
                  {
                    // y: [0, -15, 0],
                  }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.05,
                  // repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p className="text-base sm:text-lg text-[#121212]/80 dark:text-white/80 max-w-none mx-auto md:mx-0">
            {SITE.readme}
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "relative inline-flex items-center justify-center p-2 rounded-full",
                "bg-[#f8f8f8]/50 dark:bg-[#1a1a1a]/50",
                "text-[#121212]/70 dark:text-white/70",
                "hover:text-[var(--theme-primary)] dark:hover:text-[var(--theme-secondary)]",
                "transition-[color,box-shadow] duration-300 hover:shadow-md",
              )}
              aria-label={link.platform}
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${0.5 + index * 0.1}s forwards`,
              }}
            >
              <span aria-hidden="true" className={`social-icon-${link.icon.replace(":", "-")} text-2xl`} />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
