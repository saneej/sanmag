"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Instagram, Youtube, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/')

    const handleScroll = () => {
      // Only show header after scrolling past 100vh on home page
      if (isHomePage) {
        setIsScrolled(window.scrollY > window.innerHeight * 0.8)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      isScrolled ? "translate-y-0 opacity-100" : (isHomePage ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"),
      "border-b border-white/10 bg-gradient-to-r from-indigo-950/95 to-purple-950/95 backdrop-blur-md"
    )}>
      {/* Top bar with contact info */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container flex items-center justify-between py-2 text-sm text-zinc-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="mr-2 h-3 w-3" />
              <span>+91 8113 0044 11 / +91 8113 8899 33</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-3 w-3" />
              <span>mail@magusacademy.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-3 w-3" />
              <span>Kannur Road, West Nadakkavu, Calicut, Kerala</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/magus_academy/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.youtube.com/@magusacademyindia" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
                <Youtube className="h-3.5 w-3.5" />
              </a>
              <a href="http://wa.me/+918113004411" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
                <MessageSquare className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/magus-logo-white.png" 
            alt="Magus Academy" 
            width={150} 
            height={45} 
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            About
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              Courses
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="w-56 rounded-md bg-gradient-to-br from-indigo-900/90 to-purple-900/90 p-3 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-md">
                <Link href="/courses/btech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  B.Tech Tuition
                </Link>
                <Link href="/courses/mtech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  M.Tech Tuition
                </Link>
                <Link href="/courses/barch" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  B.Arch Tuition
                </Link>
                <Link href="/courses/plus-two" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  Plus One & Plus Two
                </Link>
                <Link href="/courses/10th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  10th Standard
                </Link>
                <Link href="/courses/polytechnic" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  Polytechnic
                </Link>
                <div className="border-t border-white/10 my-2"></div>
                <Link href="/courses" className="block rounded-md px-3 py-2 text-sm text-purple-300 hover:bg-white/10 transition-colors">
                  View All Programs
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button 
              className="flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors"
            >
              Notes
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="w-56 rounded-md bg-gradient-to-br from-indigo-900/90 to-purple-900/90 p-3 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-md">
                <Link href="/notes/btech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  B.Tech Notes
                </Link>
                <Link href="/notes/mtech" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  M.Tech Notes
                </Link>
                <Link href="/notes/barch" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  B.Arch Notes
                </Link>
                <Link href="/notes/12th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  12th Standard
                </Link>
                <Link href="/notes/11th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  11th Standard
                </Link>
                <Link href="/notes/10th" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                  10th Standard
                </Link>
                <div className="border-t border-white/10 my-2"></div>
                <Link href="/notes" className="block rounded-md px-3 py-2 text-sm text-purple-300 hover:bg-white/10 transition-colors">
                  All Notes
                </Link>
              </div>
            </div>
          </div>
          <Link href="/careers" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            Careers
          </Link>
          <a href="http://wa.me/+918113004411" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 backdrop-blur-md",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="h-full overflow-auto bg-gradient-to-br from-indigo-900/90 to-purple-900/90 border-t border-white/10">
          <div className="container py-4 space-y-4">
            <Link 
              href="/" 
              className="block py-2 text-white hover:text-purple-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="block py-2 text-white hover:text-purple-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div>
              <button 
                className="flex items-center w-full py-2 text-white hover:text-purple-300 justify-between"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <span>Courses</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isCoursesOpen ? "rotate-180" : "")} />
              </button>
              <div className={cn("pl-4 space-y-2 mt-2", isCoursesOpen ? "block" : "hidden")}>
                <Link 
                  href="/courses/btech" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Tech Tuition
                </Link>
                <Link 
                  href="/courses/mtech" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  M.Tech Tuition
                </Link>
                <Link 
                  href="/courses/barch" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Arch Tuition
                </Link>
                <Link 
                  href="/courses/plus-two" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plus One & Plus Two
                </Link>
                <Link 
                  href="/courses/10th" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  10th Standard
                </Link>
                <Link 
                  href="/courses/polytechnic" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Polytechnic
                </Link>
                <Link 
                  href="/courses" 
                  className="block py-1 text-purple-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Programs
                </Link>
              </div>
            </div>
            <div>
              <button 
                className="flex items-center w-full py-2 text-white hover:text-purple-300 justify-between"
                onClick={() => setIsNotesOpen(!isNotesOpen)}
              >
                <span>Notes</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isNotesOpen ? "rotate-180" : "")} />
              </button>
              <div className={cn("pl-4 space-y-2 mt-2", isNotesOpen ? "block" : "hidden")}>
                <Link 
                  href="/notes/btech" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Tech Notes
                </Link>
                <Link 
                  href="/notes/mtech" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  M.Tech Notes
                </Link>
                <Link 
                  href="/notes/barch" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Arch Notes
                </Link>
                <Link 
                  href="/notes/12th" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  12th Standard
                </Link>
                <Link 
                  href="/notes/11th" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  11th Standard
                </Link>
                <Link 
                  href="/notes/10th" 
                  className="block py-1 text-zinc-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  10th Standard
                </Link>
                <Link 
                  href="/notes" 
                  className="block py-1 text-purple-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Notes
                </Link>
              </div>
            </div>
            <Link 
              href="/careers" 
              className="block py-2 text-white hover:text-purple-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <a 
              href="http://wa.me/+918113004411" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 text-white hover:text-purple-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-white/10 flex justify-between">
              <a href="https://www.instagram.com/magus_academy/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@magusacademyindia" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="http://wa.me/+918113004411" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-purple-300 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

