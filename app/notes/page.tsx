import Link from "next/link"
import { ChevronRight, Folder } from "lucide-react"
import Header from "@/components/header"

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Study Notes</h1>
            <p className="text-zinc-300 mb-12">
              Access comprehensive study materials for all our courses. These notes are prepared by our expert faculty
              to help you excel in your studies.
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/btech" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">B.Tech Notes</h2>
                      <p className="text-zinc-400 text-sm">Engineering disciplines - All semesters</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/mtech" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">M.Tech Notes</h2>
                      <p className="text-zinc-400 text-sm">Advanced engineering subjects</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/barch" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">B.Arch Notes</h2>
                      <p className="text-zinc-400 text-sm">Architectural studies and design</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/12th" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">12th Standard Notes</h2>
                      <p className="text-zinc-400 text-sm">Plus Two - Science and Commerce</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/11th" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">11th Standard Notes</h2>
                      <p className="text-zinc-400 text-sm">Plus One - Science and Commerce</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Link href="/notes/10th" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Folder className="h-6 w-6 text-purple-400" />
                    <div>
                      <h2 className="text-xl font-medium text-white">10th Standard Notes</h2>
                      <p className="text-zinc-400 text-sm">CBSE and State syllabus</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

