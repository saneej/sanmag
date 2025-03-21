"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"

// Mock Instagram posts data
const mockInstaPosts = [
  {
    id: "1",
    imageUrl: "/images/btech-courses.png",
    likes: 45,
    comments: 3,
    caption: "Master your B.Tech courses with specialized tuition at Magus Academy! #BTech #Engineering #Education",
    date: "2 days ago",
  },
  {
    id: "2",
    imageUrl: "/images/mtech-subjects.png",
    likes: 38,
    comments: 5,
    caption: "Elevate your technical expertise with our M.Tech coaching programs! #MTech #HigherEducation #Engineering",
    date: "4 days ago",
  },
  {
    id: "3",
    imageUrl: "/images/barch-subjects.png",
    likes: 52,
    comments: 7,
    caption: "Boost your architectural skills with expert guidance at Magus Academy! #BArch #Architecture #Design",
    date: "1 week ago",
  },
  {
    id: "4",
    imageUrl: "/images/universities.png",
    likes: 63,
    comments: 9,
    caption:
      "We cover all major universities including KTU, Calicut University, MG University, and NIT/IIT! #HigherEducation #Kerala",
    date: "1 week ago",
  },
]

export default function InstagramFeed() {
  const [posts, setPosts] = useState(mockInstaPosts)
  const [isLoading, setIsLoading] = useState(false)

  // In a real implementation, you would fetch actual Instagram posts here
  useEffect(() => {
    // This is just a mock implementation
    setIsLoading(true)
    setTimeout(() => {
      setPosts(mockInstaPosts)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Instagram className="h-5 w-5 text-purple-400" />
          <h3 className="text-xl font-bold text-white">@magus_academy</h3>
        </div>
        <a
          href="https://www.instagram.com/magus_academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 text-sm hover:text-purple-200 transition-colors"
        >
          Follow us
        </a>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-white/5 animate-pulse rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/magus_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex items-center">
                    <Heart className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
                <p className="text-white text-xs mt-1 line-clamp-2">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

