import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import SubjectNotesDropdown from "@/components/subject-notes-dropdown"
import IconBackground from "@/components/icon-background"

interface SemesterPageProps {
  params: {
    branch: string
    semester: string
  }
}

export default function SemesterPage({ params }: SemesterPageProps) {
  const { branch, semester } = params

  const branchNames: Record<string, string> = {
    civil: "Civil Engineering",
    mechanical: "Mechanical Engineering",
    electronics: "Electronics Engineering",
    electrical: "Electrical Engineering",
    "computer-science": "Computer Science",
  }

  const branchName = branchNames[branch] || branch
  const semesterNumber = semester.replace("semester-", "")

  // Sample subjects based on branch
  const getSubjects = (branch: string, semester: string) => {
    const semNum = Number.parseInt(semester.replace("semester-", ""))

    const commonSubjects = [
      {
        name: "Engineering Mathematics",
        code: `MA${semNum}01`,
        notes: [
          { title: "Module 1: Differential Equations", url: "#", type: "note" },
          { title: "Module 2: Linear Algebra", url: "#", type: "note" },
          { title: "Module 3: Vector Calculus", url: "#", type: "note" },
          { title: "Mid Semester Exam 2023", url: "#", type: "question", exam: "MSE 2023" },
          { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          { title: "Supplementary Exam 2022", url: "#", type: "question", exam: "Supply 2022" },
        ],
      },
      {
        name: "Professional Ethics",
        code: `HU${semNum}01`,
        notes: [
          { title: "Module 1: Introduction to Ethics", url: "#", type: "note" },
          { title: "Module 2: Professional Responsibilities", url: "#", type: "note" },
          { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
        ],
      },
    ]

    const branchSubjects: Record<string, any[]> = {
      civil: [
        {
          name: "Structural Analysis",
          code: `CE${semNum}01`,
          notes: [
            { title: "Module 1: Basic Concepts", url: "#", type: "note" },
            { title: "Module 2: Beams and Frames", url: "#", type: "note" },
            { title: "Module 3: Influence Lines", url: "#", type: "note" },
            { title: "Module 4: Arches and Cables", url: "#", type: "note" },
            { title: "Mid Semester Exam 2023", url: "#", type: "question", exam: "MSE 2023" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Geotechnical Engineering",
          code: `CE${semNum}02`,
          notes: [
            { title: "Module 1: Soil Properties", url: "#", type: "note" },
            { title: "Module 2: Soil Classification", url: "#", type: "note" },
            { title: "Module 3: Permeability", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Transportation Engineering",
          code: `CE${semNum}03`,
          notes: [
            { title: "Module 1: Highway Planning", url: "#", type: "note" },
            { title: "Module 2: Geometric Design", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Environmental Engineering",
          code: `CE${semNum}04`,
          notes: [
            { title: "Module 1: Water Supply", url: "#", type: "note" },
            { title: "Module 2: Wastewater Management", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
      ],
      mechanical: [
        {
          name: "Thermodynamics",
          code: `ME${semNum}01`,
          notes: [
            { title: "Module 1: Basic Concepts", url: "#", type: "note" },
            { title: "Module 2: First Law", url: "#", type: "note" },
            { title: "Module 3: Second Law", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Fluid Mechanics",
          code: `ME${semNum}02`,
          notes: [
            { title: "Module 1: Fluid Properties", url: "#", type: "note" },
            { title: "Module 2: Fluid Statics", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Manufacturing Processes",
          code: `ME${semNum}03`,
          notes: [
            { title: "Module 1: Casting", url: "#", type: "note" },
            { title: "Module 2: Welding", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Machine Design",
          code: `ME${semNum}04`,
          notes: [
            { title: "Module 1: Design Principles", url: "#", type: "note" },
            { title: "Module 2: Fasteners", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
      ],
      electronics: [
        {
          name: "Digital Electronics",
          code: `EC${semNum}01`,
          notes: [
            { title: "Module 1: Number Systems", url: "#", type: "note" },
            { title: "Module 2: Logic Gates", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Signals and Systems",
          code: `EC${semNum}02`,
          notes: [
            { title: "Module 1: Signal Classification", url: "#", type: "note" },
            { title: "Module 2: Fourier Series", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Microprocessors",
          code: `EC${semNum}03`,
          notes: [
            { title: "Module 1: Architecture", url: "#", type: "note" },
            { title: "Module 2: Instruction Set", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Communication Systems",
          code: `EC${semNum}04`,
          notes: [
            { title: "Module 1: Analog Modulation", url: "#", type: "note" },
            { title: "Module 2: Digital Modulation", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
      ],
      electrical: [
        {
          name: "Electric Circuits",
          code: `EE${semNum}01`,
          notes: [
            { title: "Module 1: Circuit Elements", url: "#", type: "note" },
            { title: "Module 2: Network Theorems", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Power Systems",
          code: `EE${semNum}02`,
          notes: [
            { title: "Module 1: Generation", url: "#", type: "note" },
            { title: "Module 2: Transmission", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Control Systems",
          code: `EE${semNum}03`,
          notes: [
            { title: "Module 1: Mathematical Models", url: "#", type: "note" },
            { title: "Module 2: Time Response", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Electrical Machines",
          code: `EE${semNum}04`,
          notes: [
            { title: "Module 1: Transformers", url: "#", type: "note" },
            { title: "Module 2: DC Machines", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
      ],
      "computer-science": [
        {
          name: "Data Structures",
          code: `CS${semNum}01`,
          notes: [
            { title: "Module 1: Arrays and Linked Lists", url: "#", type: "note" },
            { title: "Module 2: Stacks and Queues", url: "#", type: "note" },
            { title: "Module 3: Trees and Graphs", url: "#", type: "note" },
            { title: "Mid Semester Exam 2023", url: "#", type: "question", exam: "MSE 2023" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Operating Systems",
          code: `CS${semNum}02`,
          notes: [
            { title: "Module 1: Process Management", url: "#", type: "note" },
            { title: "Module 2: Memory Management", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Database Management",
          code: `CS${semNum}03`,
          notes: [
            { title: "Module 1: ER Model", url: "#", type: "note" },
            { title: "Module 2: SQL", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
        {
          name: "Computer Networks",
          code: `CS${semNum}04`,
          notes: [
            { title: "Module 1: Network Models", url: "#", type: "note" },
            { title: "Module 2: Data Link Layer", url: "#", type: "note" },
            { title: "End Semester Exam 2023", url: "#", type: "question", exam: "ESE 2023" },
          ],
        },
      ],
    }

    return [...commonSubjects, ...(branchSubjects[branch] || [])]
  }

  const subjects = getSubjects(branch, semester)

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />
      <IconBackground opacity={0.03} />

      <section className="py-16 md:py-24 pt-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href={`/notes/btech/${branch}`} className="text-zinc-400 hover:text-white flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to {branchName} Semesters</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {branchName} - Semester {semesterNumber}
            </h1>
            <p className="text-zinc-300 mb-12">
              Download subject-wise notes, question papers, and study materials for Semester {semesterNumber} of{" "}
              {branchName}.
            </p>

            <div className="space-y-6">
              {subjects.map((subject) => (
                <SubjectNotesDropdown
                  key={subject.code}
                  subject={`${subject.name} (${subject.code})`}
                  notes={subject.notes}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

