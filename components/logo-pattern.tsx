import { cn } from "@/lib/utils"

interface LogoPatternProps {
  className?: string
  opacity?: number
}

export default function LogoPattern({ className, opacity = 0.03 }: LogoPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        backgroundImage: `url('/images/magus-icon.png')`,
        backgroundSize: "120px",
        backgroundRepeat: "repeat",
        opacity: opacity,
      }}
    />
  )
}

