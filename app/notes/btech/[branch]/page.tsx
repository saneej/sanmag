import Link from "next/link"
import { ChevronRight, Folder, ArrowLeft } from "lucide-react"
import Header from "@/components/header"

interface BranchPageProps {
  params: {
    branch: string
  }
}

export default function BranchPage({ params }: BranchPageProps) {
  const { branch } = params

  const branchNames: Record<string, string> = {
    civil: "Civil Engineering",
    mechanical: "Mechanical Engineering",
    electronics: "Electronics Engineering",
    electrical: "Electrical Engineering",
    "computer-science": "Computer Science",
  }

  const branchName = branchNames[branch] || branch

  const semesters = Array.from({ length: 8 }, (_, i) => ({
    number: i + 1,
    name: `Semester ${i + 1}`,
    slug: `semester-${i + 1}`,
    description: `S${i + 1} - All subjects and materials`,
  }))

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/notes/btech" className="text-zinc-400 hover:text-white flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to B.Tech Branches</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{branchName} Notes</h1>
            <p className="text-zinc-300 mb-12">
              Access comprehensive study materials for all semesters of {branchName}. Select a semester to view
              subject-wise notes.
            </p>

            <div className="space-y-6">
              {semesters.map((semester) => (
                <div
                  key={semester.slug}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <Link href={`/notes/btech/${branch}/${semester.slug}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Folder className="h-6 w-6 text-purple-400" />
                      <div>
                        <h2 className="text-xl font-medium text-white">{semester.name}</h2>
                        <p className="text-zinc-400 text-sm">{semester.description}</p>
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

