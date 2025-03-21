"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function GoogleMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Our Location</h3>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-white">5.0</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg shadow-purple-900/30">
        {!isLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
            <span className="text-white/50">Loading map...</span>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3aY6jTkSQ3TqdFj0378W-49-jyNAtnjo&q=Magus+Academy,Calicut,Kerala&zoom=16&maptype=roadmap&language=en&region=IN&style=feature:all|element:geometry|color:0x1a1f5a&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:road|element:geometry|color:0x6c63ff&style=feature:water|element:geometry|color:0x1e2b6f"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-white font-medium">Magus Academy</p>
          <p className="text-zinc-300 text-sm">Kannur Road, West Nadakkavu, Calicut, Kerala</p>
        </div>
        <a
          href="https://www.google.com/maps/place/Magus+Academy/@11.2748054,75.7729225,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba65f934f349ff7:0xc67c3f7fe056f050!8m2!3d11.2748054!4d75.7729225!16s%2Fg%2F11wr95823s?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 text-sm hover:text-purple-200 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}

