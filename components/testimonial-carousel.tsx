"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import TestimonialCard from "@/components/testimonial-card"

interface Testimonial {
  name: string
  course: string
  image?: string
  rating: number
  testimonial: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        goToNext()
      }, interval)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [autoplay, interval, isAnimating])

  return (
    <div className={cn("relative max-w-4xl mx-auto", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <TestimonialCard
                name={testimonial.name}
                course={testimonial.course}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                className="max-w-sm mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-2 text-white shadow-lg transition-colors hover:from-indigo-600 hover:to-purple-700"
        aria-label="Previous testimonial"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-2 text-white shadow-lg transition-colors hover:from-indigo-600 hover:to-purple-700"
        aria-label="Next testimonial"
        disabled={isAnimating}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 w-6"
                : "bg-white/30 hover:bg-white/50",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}

