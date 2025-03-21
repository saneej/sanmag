import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  course: string
  image?: string
  rating: number
  testimonial: string
  className?: string
}

export default function TestimonialCard({ name, course, image, rating, testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center mb-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 bg-gradient-to-br from-indigo-600 to-purple-600">
          {image ? (
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-purple-300 text-sm">{course}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400")} />
        ))}
      </div>

      <p className="text-zinc-300 italic text-sm">"{testimonial}"</p>
    </div>
  )
}

