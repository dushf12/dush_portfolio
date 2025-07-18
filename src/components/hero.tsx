'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { data } from '../constants'

// Particle component for background effect
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="particle"
    style={{
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
    }}
    initial={{ opacity: 0, y: 100 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      y: [-100, -1000]
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
)

// Animated typing text with modern styling
const AnimatedText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isReversing, setIsReversing] = useState(false)

  useEffect(() => {
    if (!isReversing) {
      // Forward typing
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Start reversing after a pause
        const pauseTimeout = setTimeout(() => {
          setIsReversing(true)
        }, 2000) // Wait 2 seconds before reversing
        return () => clearTimeout(pauseTimeout)
      }
    } else {
      // Reverse typing (backspace effect)
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        }, 50) // Faster reverse typing
        return () => clearTimeout(timeout)
      } else {
        // Start forward typing again
        const restartTimeout = setTimeout(() => {
          setIsReversing(false)
        }, 1000) // Wait 1 second before restarting
        return () => clearTimeout(restartTimeout)
      }
    }
  }, [currentIndex, text, isReversing])

  return (
    <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight animate-gradient-move bg-gradient-to-r from-[#a259ff] via-[#3a0ca3] to-[#f72585] bg-[length:200%_200%] bg-clip-text text-transparent font-[Poppins,Inter,sans-serif] ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #a259ff, #3a0ca3, #f72585, #a259ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'Poppins, Inter, sans-serif',
      }}
    >
      {displayedText}
      <span className="animate-pulse text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">|</span>
    </h1>
  )
}

// Main Hero component
export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { avatar, about, links } = data

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Animated particles background */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 morph-shape rounded-full opacity-10"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 morph-shape rounded-lg opacity-15"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          {/* Avatar with floating animation - user image */}
          <motion.div
            className="mb-8 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
              <img
                src="/dush_pic.jpg"
                alt="Dushyanth Bandaru"
                className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-xl border-4 border-white/20 glass glow"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </motion.div>

          {/* Name with animated typing effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <AnimatedText 
              text="Dushyanth Bandaru"
              className="mb-4"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white/90 font-[Poppins,Inter,sans-serif]">
              {about.title}
            </h2>
          </motion.div>

          {/* Description with impressive landing style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mb-12 w-full flex justify-center"
          >
            <p className="font-mono text-foreground text-xl md:text-2xl leading-relaxed w-full font-normal animate-fade-in-up text-justify">
              {about.description}
            </p>
          </motion.div>

          {/* Social links with modern design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="glass rounded-full w-14 h-14 p-0 glow hover:text-purple-400 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.title}
                      >
                        <link.icon className="w-6 h-6" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">{link.title}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="glass rounded-full px-8 py-4 text-lg font-semibold glow hover:scale-105 transition-all duration-300 font-[Poppins,Inter,sans-serif]"
              asChild
            >
              <a href="/_B_Dushyanth_Resume.pdf" target="_blank" className="flex items-center gap-2" download>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
