import { Check } from "lucide-react"

interface CourseFeatureProps {
  title: string
}

export default function CourseFeature({ title }: CourseFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center">
        <Check className="h-3.5 w-3.5 text-purple-400" />
      </div>
      <span className="text-white">{title}</span>
    </div>
  )
}

