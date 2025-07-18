'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import { navLinks } from '@/constants'
import { motion } from 'framer-motion'

export function Header() {
  const pathname = usePathname()

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-lg border border-border/50 px-6 py-4 transition-all duration-300 hover:shadow-xl hover:bg-white/90 dark:hover:bg-black/50">
        <div className="flex items-center justify-between">
          {/* Left: Name + Nav */}
          <div className="flex items-center gap-8 flex-wrap">
            <Link
              href="/"
              aria-label="Home"
              className="group flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="font-extrabold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-[#a259ff] via-[#3a0ca3] to-[#f72585] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move font-[Poppins,Inter,sans-serif]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #a259ff, #3a0ca3, #f72585, #a259ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Poppins, Inter, sans-serif',
                }}
              >
                Dushyanth Bandaru
              </motion.span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  <Link
                    href={link.url}
                    aria-label={link.label}
                    className={clsx(
                      'px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out relative group',
                      {
                        'text-primary': pathname === link.url,
                        'hover:text-primary': pathname !== link.url
                      }
                    )}
                  >
                    {link.title}
                    <span 
                      className={clsx(
                        'absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out',
                        {
                          'scale-x-100': pathname === link.url,
                          'scale-x-0 group-hover:scale-x-100': pathname !== link.url
                        }
                      )}
                    />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Right: Theme Toggle */}
          <div className="ml-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ModeToggle />
            </motion.div>
          </div>
        </div>

        {/* Mobile nav */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex md:hidden justify-center flex-wrap gap-4"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <Link
                href={link.url}
                aria-label={link.label}
                className={clsx(
                  'px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out relative group',
                  {
                    'text-primary': pathname === link.url,
                    'hover:text-primary': pathname !== link.url
                  }
                )}
              >
                {link.title}
                <span 
                  className={clsx(
                    'absolute bottom-0 left-3 right-3 h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out',
                    {
                      'scale-x-100': pathname === link.url,
                      'scale-x-0 group-hover:scale-x-100': pathname !== link.url
                    }
                  )}
                />
              </Link>
            </div>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  )
}

/* Add this to your global CSS for the animation if not present:
@keyframes gradient-move {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-move {
  animation: gradient-move 8s linear infinite;
}
*/
