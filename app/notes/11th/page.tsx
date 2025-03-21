import Link from "next/link"
import { ChevronRight, Folder, ArrowLeft } from "lucide-react"
import Header from "@/components/header"

export default function EleventhNotesPage() {
  const subjects = [
    {
      name: "Physics",
      slug: "physics",
      description: "Mechanics, thermodynamics, optics, and more",
    },
    {
      name: "Chemistry",
      slug: "chemistry",
      description: "Organic, inorganic, and physical chemistry",
    },
    {
      name: "Mathematics",
      slug: "mathematics",
      description: "Calculus, algebra, trigonometry, and more",
    },
    {
      name: "Biology",
      slug: "biology",
      description: "Botany, zoology, and human physiology",
    },
    {
      name: "Computer Science",
      slug: "computer-science",
      description: "Programming, data structures, and computer fundamentals",
    },
    {
      name: "Commerce",
      slug: "commerce",
      description: "Accountancy, business studies, and economics",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/notes" className="text-zinc-400 hover:text-white flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Notes</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">11th Standard (Plus One) Notes</h1>
            <p className="text-zinc-300 mb-12">
              Access comprehensive study materials for all Plus One subjects. Both Science and Commerce stream materials
              are available.
            </p>

            <div className="space-y-6">
              {subjects.map((subject) => (
                <div
                  key={subject.slug}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <Link href={`/notes/11th/${subject.slug}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Folder className="h-6 w-6 text-purple-400" />
                      <div>
                        <h2 className="text-xl font-medium text-white">{subject.name}</h2>
                        <p className="text-zinc-400 text-sm">{subject.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-zinc-400" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

