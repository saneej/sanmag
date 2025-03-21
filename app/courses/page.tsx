import Link from "next/link"
import { ChevronRight, GraduationCap, BookOpen, Code, Atom, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import CourseCard from "@/components/course-card"
import LogoPattern from "@/components/logo-pattern"

export const metadata = {
  title: "All Programs - Magus Academy",
  description:
    "Explore all academic programs offered by Magus Academy in Calicut, Kerala. B.Tech, M.Tech, B.Arch, Plus One, Plus Two, and 10th standard tuition.",
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />

      <section className="pt-32 pb-16">
        <LogoPattern opacity={0.02} />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Academic Programs</h1>
            <p className="text-xl text-zinc-300">
              Comprehensive educational programs designed to help students excel in their academic journey.
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
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-950 to-indigo-950">
        <LogoPattern opacity={0.02} />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">B.Tech Program Details</h2>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Engineering Branches</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Civil Engineering</p>
                    <p className="text-zinc-300 text-sm">Structural analysis, construction, transportation, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Mechanical Engineering</p>
                    <p className="text-zinc-300 text-sm">Thermodynamics, manufacturing, fluid mechanics, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Electronics Engineering</p>
                    <p className="text-zinc-300 text-sm">
                      Circuit design, digital systems, signal processing, and more
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Electrical Engineering</p>
                    <p className="text-zinc-300 text-sm">
                      Power systems, control systems, electrical machines, and more
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Computer Science</p>
                    <p className="text-zinc-300 text-sm">Programming, data structures, algorithms, and more</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">M.Tech Program Details</h2>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Specializations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Advanced Mechanics</p>
                    <p className="text-zinc-300 text-sm">Advanced topics in mechanical engineering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Power Systems</p>
                    <p className="text-zinc-300 text-sm">Electrical power generation, transmission, and distribution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">CS and Engineering</p>
                    <p className="text-zinc-300 text-sm">Advanced computer science and software engineering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Structural Engineering</p>
                    <p className="text-zinc-300 text-sm">Advanced structural analysis and design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">VLSI Design</p>
                    <p className="text-zinc-300 text-sm">Very Large Scale Integration circuit design</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">B.Arch Program Details</h2>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Core Subjects</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Engineering Mechanics</p>
                    <p className="text-zinc-300 text-sm">Statics, dynamics, and mechanics of materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Theory of Structures (TOS)</p>
                    <p className="text-zinc-300 text-sm">Analysis of structural systems and components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Design of Structures (DOS)</p>
                    <p className="text-zinc-300 text-sm">Structural design principles and applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Land Survey</p>
                    <p className="text-zinc-300 text-sm">Surveying techniques and land measurement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Architectural Drawing</p>
                    <p className="text-zinc-300 text-sm">Technical drawing and visualization for architecture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Building Construction</p>
                    <p className="text-zinc-300 text-sm">Construction methods, materials, and techniques</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">School Programs</h2>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Plus One & Plus Two</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Physics</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Chemistry</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Mathematics</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Biology</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Computer Science</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Commerce Subjects</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">10th Standard</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Mathematics</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Science</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">English</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Social Science</p>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      <p className="text-white">Malayalam</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-indigo-950 to-black">
        <LogoPattern opacity={0.02} />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Your Studies?</h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join Magus Academy and experience the difference in your academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/notes">Access Study Notes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

