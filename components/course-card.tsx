import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  imageUrl?: string
  className?: string
}

export default function CourseCard({ title, subtitle, description, icon: Icon, className }: CourseCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300",
        className,
      )}
    >
      {/* Course card background - gradient only */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-800/20 to-purple-800/20 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/70 to-indigo-950/30 z-10" />

      <div className="relative z-20 p-6 flex flex-col h-full">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-purple-300 mb-3">{subtitle}</p>

        <p className="text-zinc-300 mb-6 flex-grow">{description}</p>

        <div className="mt-auto">
          <button className="text-white font-medium flex items-center group-hover:text-purple-300 transition-colors">
            Learn more
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

