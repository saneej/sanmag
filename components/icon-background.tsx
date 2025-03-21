import Image from "next/image"
import { cn } from "@/lib/utils"

interface IconBackgroundProps {
  className?: string
  opacity?: number
}

export default function IconBackground({ className, opacity = 0.05 }: IconBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none", className)}>
      <Image src="/images/icon-stroke.png" alt="" fill className="object-cover opacity-[0.05]" style={{ opacity }} />
    </div>
  )
}

