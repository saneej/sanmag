"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage?: string
  speed?: number
  className?: string
}

export default function ParallaxSection({ children, bgImage, speed = 0.5, className }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Only update when section is in view
      if (top < windowHeight && top > -sectionRef.current.offsetHeight) {
        const newOffset = (scrollPosition - (scrollPosition + top - windowHeight)) * speed
        setOffset(newOffset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30"
        style={{
          transform: `translateY(${offset}px)`,
          opacity: 0.2,
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

