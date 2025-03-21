import Link from "next/link"
import { ChevronRight, Folder, ArrowLeft } from "lucide-react"
import Header from "@/components/header"

export default function MTechNotesPage() {
  const specializations = [
    {
      name: "Advanced Mechanics",
      slug: "advanced-mechanics",
      description: "Advanced topics in mechanical engineering",
    },
    {
      name: "Power Systems",
      slug: "power-systems",
      description: "Electrical power generation, transmission, and distribution",
    },
    {
      name: "CS and Engineering",
      slug: "cs-engineering",
      description: "Advanced computer science and software engineering",
    },
    {
      name: "Structural Engineering",
      slug: "structural-engineering",
      description: "Advanced structural analysis and design",
    },
    {
      name: "VLSI Design",
      slug: "vlsi-design",
      description: "Very Large Scale Integration circuit design",
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

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">M.Tech Study Notes</h1>
            <p className="text-zinc-300 mb-12">
              Access comprehensive study materials for all M.Tech specializations. Select your specialization to view
              semester-wise notes.
            </p>

            <div className="space-y-6">
              {specializations.map((specialization) => (
                <div
                  key={specialization.slug}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <Link href={`/notes/mtech/${specialization.slug}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Folder className="h-6 w-6 text-purple-400" />
                      <div>
                        <h2 className="text-xl font-medium text-white">{specialization.name}</h2>
                        <p className="text-zinc-400 text-sm">{specialization.description}</p>
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

