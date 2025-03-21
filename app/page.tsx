import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  GraduationCap,
  BookOpen,
  Code,
  Atom,
  Building2,
  Users,
  FileText,
  Instagram,
  Youtube,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import ParallaxSection from "@/components/parallax-section"
import CourseCard from "@/components/course-card"
import Header from "@/components/header"
import CourseFeature from "@/components/course-feature"
import ImageCarousel from "@/components/image-carousel"
import TestimonialCarousel from "@/components/testimonial-carousel"
import InstagramFeed from "@/components/instagram-feed"
import GoogleMap from "@/components/google-map"
import LogoPattern from "@/components/logo-pattern"
import IconBackground from "@/components/icon-background"

// SEO metadata
export const metadata = {
  title: "Magus Academy - Premier Tuition Center in Calicut, Kerala",
  description:
    "Magus Academy offers expert tuition for B.Tech, M.Tech, B.Arch, Plus One, Plus Two, and 10th standard students in Calicut, Kerala. Specialized coaching for all engineering branches.",
  keywords:
    "Magus Academy, Calicut, Kerala, B.Tech tuition, M.Tech tuition, B.Arch tuition, Plus One, Plus Two, 10th tuition, engineering coaching, KTU, Calicut University",
}

export default function Home() {
  // B.Tech carousel images
  const btechImages = [
    { src: "/images/btech-courses.png", alt: "B.Tech Courses" },
    { src: "/images/carousel-1.jpeg", alt: "Engineering Technology" },
    { src: "/images/carousel-2.jpeg", alt: "Modern Learning Systems" },
    { src: "/images/universities.png", alt: "Universities" },
  ]

  // M.Tech carousel images
  const mtechImages = [
    { src: "/images/mtech-subjects.png", alt: "M.Tech Subjects" },
    { src: "/images/carousel-2.jpeg", alt: "Advanced Technology" },
    { src: "/images/carousel-3.jpeg", alt: "Student Excellence" },
    { src: "/images/carousel-1.jpeg", alt: "Modern Facilities" },
  ]

  // B.Arch carousel images
  const barchImages = [
    { src: "/images/barch-subjects.png", alt: "B.Arch Subjects" },
    { src: "/images/carousel-4.jpeg", alt: "Architectural Design" },
    { src: "/images/carousel-3.jpeg", alt: "Student Projects" },
    { src: "/images/carousel-1.jpeg", alt: "Modern Facilities" },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Rahul Menon",
      course: "B.Tech Civil Engineering",
      rating: 5,
      testimonial:
        "Magus Academy helped me excel in my B.Tech studies. The faculty's expertise and personalized attention made complex subjects easy to understand.",
    },
    {
      name: "Anjali Krishnan",
      course: "M.Tech Structural Engineering",
      rating: 5,
      testimonial:
        "The M.Tech coaching at Magus Academy is exceptional. The in-depth coverage of advanced topics helped me secure top grades in my university exams.",
    },
    {
      name: "Vishnu Prasad",
      course: "B.Arch Student",
      rating: 5,
      testimonial:
        "The B.Arch program at Magus Academy provided me with a strong foundation in architectural concepts. The faculty's guidance was invaluable.",
    },
    {
      name: "Meera Nair",
      course: "B.Tech Computer Science",
      rating: 5,
      testimonial:
        "I was struggling with programming concepts until I joined Magus Academy. Their teaching methodology made complex algorithms seem simple.",
    },
    {
      name: "Arjun Mohan",
      course: "Plus Two Science",
      rating: 5,
      testimonial:
        "The Plus Two coaching at Magus Academy is outstanding. I scored above 95% in my board exams thanks to their guidance.",
    },
    {
      name: "Lakshmi Priya",
      course: "M.Tech Power Systems",
      rating: 5,
      testimonial:
        "The faculty at Magus Academy are experts in their fields. Their practical approach to teaching helped me understand complex power system concepts.",
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section with Particles */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10" />
        <LogoPattern opacity={0.02} />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-64 md:w-80 mb-4">
              <Image
                src="/images/magus-logo-white.png"
                alt="Magus Academy"
                width={400}
                height={120}
                className="w-full h-auto brightness-0 invert"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                Shaping Future Leaders
              </span>
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-zinc-200">
              Unlock your potential with cutting-edge education at Magus Academy in Calicut, Kerala.
              <span className="block mt-2 text-purple-300 font-medium">Minds in motion.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="/courses">
                  Explore Courses
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="http://wa.me/+918113004411" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
                asChild
              >
                <Link href="/notes">
                  <FileText className="mr-2 h-4 w-4" />
                  Study Notes
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* About Section with Parallax */}
      <ParallaxSection speed={0.5} className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950" id="about">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">About Magus Academy</h2>
              <p className="text-zinc-200">
                Magus Academy is a premier educational institution in Calicut, Kerala, dedicated to providing
                exceptional learning experiences. Our cutting-edge teaching methodologies and expert faculty ensure that
                students receive the highest quality education.
              </p>
              <p className="text-zinc-200">
                With a focus on both theoretical knowledge and practical applications, we prepare our students to excel
                in their academic pursuits and future careers. We offer specialized tuition for B.Tech, M.Tech, B.Arch,
                Plus One & Plus Two, 10th standard, and Polytechnic students.
              </p>
              <p className="text-zinc-200">
                Located in West Nadakkavu, Calicut, our academy has become a trusted name in education across Kerala,
                serving students from various universities including KTU, Calicut University, MG University, and
                NIT/IIT.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <GraduationCap className="h-5 w-5 text-purple-300" />
                  <span className="text-white">Expert Faculty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <BookOpen className="h-5 w-5 text-purple-300" />
                  <span className="text-white">Comprehensive Curriculum</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Users className="h-5 w-5 text-purple-300" />
                  <span className="text-white">Personalized Attention</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 flex items-center justify-center bg-gradient-to-tr from-indigo-900/50 to-purple-900/50">
              <Image
                src="/images/magus-icon.png"
                alt="Magus Academy Icon"
                width={250}
                height={250}
                className="w-64 h-64 opacity-20"
              />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Universities Section */}
      <section className="py-16 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Cover All Universities</h2>
            <p className="max-w-[700px] mx-auto text-zinc-200">
              Our comprehensive programs are designed to support students from various universities across Kerala and
              beyond.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 md:p-12">
            <div className="absolute inset-0 opacity-10">
              <Image src="/images/universities.png" alt="Universities" fill className="object-cover" />
            </div>
            <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">KTU</h3>
                <p className="text-zinc-300">APJ Abdul Kalam Technological University</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">Calicut University</h3>
                <p className="text-zinc-300">University of Calicut</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">MG University</h3>
                <p className="text-zinc-300">Mahatma Gandhi University</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">NIT/IIT</h3>
                <p className="text-zinc-300">National Institutes of Technology & Indian Institutes of Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h2>
            <p className="max-w-[700px] mx-auto text-zinc-200">
              Discover our wide range of academic programs designed to cater to different educational needs and career
              aspirations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="B.Tech Tuition"
              subtitle="Engineering Excellence"
              description="Specialized coaching for Civil, Mechanical, Electrical, Electronics, Computer Science, and more. Covering all semesters from 1-8."
              icon={Code}
            />

            <CourseCard
              title="M.Tech Tuition"
              subtitle="Advanced Engineering"
              description="Expert guidance in Advanced Mechanics, Power Systems, CS and Engineering, Structural Engineering, and VLSI Design."
              icon={Atom}
            />

            <CourseCard
              title="B.Arch Tuition"
              subtitle="Architectural Mastery"
              description="Comprehensive coaching in Engineering Mechanics, Theory of Structures, Design of Structures, and Land Survey."
              icon={Building2}
            />

            <CourseCard
              title="Plus One & Plus Two"
              subtitle="Higher Secondary Education"
              description="Expert coaching for Science and Commerce streams. Comprehensive coverage of all subjects with focus on board exam preparation."
              icon={BookOpen}
            />

            <CourseCard
              title="10th Standard"
              subtitle="CBSE & State Syllabus"
              description="Thorough preparation for 10th standard exams with specialized attention to Mathematics, Science, English, and Social Science."
              icon={BookOpen}
            />

            <CourseCard
              title="Polytechnic"
              subtitle="Diploma Engineering"
              description="Specialized coaching for Polytechnic students in various engineering disciplines with practical approach to technical subjects."
              icon={GraduationCap}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              asChild
            >
              <Link href="/courses">
                View All Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* B.Tech Courses Section */}
      <section className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">B.Tech Specializations</h2>
              <p className="text-zinc-200">
                Master your B.Tech courses with specialized tuition in various engineering disciplines. Our expert
                faculty provides comprehensive guidance for all semesters.
              </p>
              <div className="space-y-4">
                <CourseFeature title="Civil Engineering" />
                <CourseFeature title="Mechanical Engineering" />
                <CourseFeature title="Electronics Engineering" />
                <CourseFeature title="Electrical Engineering" />
                <CourseFeature title="Computer Science" />
              </div>
              <div className="pt-4">
                <Link href="/courses/btech" className="text-purple-300 hover:text-purple-200 flex items-center">
                  Learn more about our B.Tech programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <ImageCarousel images={btechImages} />
            </div>
          </div>
        </div>
      </section>

      {/* M.Tech Courses Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden h-[400px] order-2 md:order-1">
              <ImageCarousel images={mtechImages} />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">M.Tech Excellence</h2>
              <p className="text-zinc-200">
                Elevate your technical expertise with personalized guidance in key M.Tech subjects. Our specialized
                coaching helps you master advanced engineering concepts.
              </p>
              <div className="space-y-4">
                <CourseFeature title="Advanced Mechanics" />
                <CourseFeature title="Power Systems" />
                <CourseFeature title="CS and Engineering" />
                <CourseFeature title="Structural Engineering" />
                <CourseFeature title="VLSI Design" />
              </div>
              <div className="pt-4">
                <Link href="/courses/mtech" className="text-purple-300 hover:text-purple-200 flex items-center">
                  Explore our M.Tech programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B.Arch Section */}
      <section className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">B.Arch Mastery</h2>
              <p className="text-zinc-200">
                Boost your architectural skills with expert guidance in structured subjects. Our comprehensive B.Arch
                tuition covers all essential areas of architecture.
              </p>
              <div className="space-y-4">
                <CourseFeature title="Engineering Mechanics" />
                <CourseFeature title="Theory of Structures (TOS)" />
                <CourseFeature title="Design of Structures (DOS)" />
                <CourseFeature title="Land Survey" />
                <CourseFeature title="Architectural Drawing" />
                <CourseFeature title="Building Construction" />
              </div>
              <div className="pt-4">
                <Link href="/courses/barch" className="text-purple-300 hover:text-purple-200 flex items-center">
                  Discover our B.Arch programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <ImageCarousel images={barchImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student Testimonials</h2>
            <p className="max-w-[700px] mx-auto text-zinc-200">
              Hear what our students have to say about their learning experience at Magus Academy.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <InstagramFeed />
        </div>
      </section>

      {/* Features Section with Parallax */}
      <ParallaxSection speed={0.3} className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Magus Academy</h2>
            <p className="max-w-[700px] mx-auto text-zinc-200">
              Our innovative approach to education sets us apart and ensures student success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Faculty</h3>
              <p className="text-zinc-300">
                Learn from highly qualified educators with years of teaching experience and industry knowledge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Small Batch Sizes</h3>
              <p className="text-zinc-300">
                Personalized attention with limited students per batch ensures focused learning and better results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Teaching Methods</h3>
              <p className="text-zinc-300">
                Innovative teaching techniques and digital tools to make learning engaging and effective.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Google Map Section */}
      <section className="py-24 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <GoogleMap />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-indigo-950 to-black">
        <LogoPattern opacity={0.02} />
        <IconBackground opacity={0.03} />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
              <p className="text-zinc-200">
                Have questions about our programs? Reach out to us and our team will be happy to assist you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Phone</p>
                    <p className="text-white">+91 8113 0044 11 / +91 8113 8899 33</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Address</p>
                    <p className="text-white">Kannur Road, West Nadakkavu, Calicut, Kerala</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Email</p>
                    <p className="text-white">mail@magusacademy.in</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/magus_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white hover:from-indigo-600 hover:to-purple-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@magusacademyindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white hover:from-indigo-600 hover:to-purple-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="http://wa.me/+918113004411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white hover:from-indigo-600 hover:to-purple-700 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <form className="space-y-6" action="mailto:mail@magusacademy.in" method="post" encType="text/plain">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/magus-logo-white.png"
                alt="Magus Academy Logo"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-zinc-400 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/notes" className="text-zinc-400 hover:text-white transition-colors">
                Notes
              </Link>
              <Link href="/careers" className="text-zinc-400 hover:text-white transition-colors">
                Careers
              </Link>
              <a
                href="http://wa.me/+918113004411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Magus Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

