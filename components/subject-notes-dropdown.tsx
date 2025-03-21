"use client"

import { useState } from "react"
import { ChevronDown, FileText, Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface NoteItem {
  title: string
  url: string
  type: "note" | "question"
  exam?: string
}

interface SubjectNotesDropdownProps {
  subject: string
  notes: NoteItem[]
  className?: string
}

export default function SubjectNotesDropdown({ subject, notes, className }: SubjectNotesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const noteItems = notes.filter((note) => note.type === "note")
  const questionItems = notes.filter((note) => note.type === "question")

  return (
    <div className={cn("bg-white/5 rounded-lg p-6 backdrop-blur-sm", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-purple-400" />
          <div>
            <h3 className="text-xl font-medium text-white">{subject}</h3>
            <p className="text-zinc-400 text-sm">{notes.length} resources available</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronDown
            className={cn("h-5 w-5 text-white transition-transform duration-300", isOpen ? "rotate-180" : "")}
          />
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4 pt-4 border-t border-white/10">
          {noteItems.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-purple-300 mb-2">Lecture Notes</h4>
              <div className="space-y-2">
                {noteItems.map((note, index) => (
                  <a
                    key={index}
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white text-sm">{note.title}</span>
                    <Download className="h-4 w-4 text-purple-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {questionItems.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-purple-300 mb-2">Question Papers</h4>
              <div className="space-y-2">
                {questionItems.map((question, index) => (
                  <a
                    key={index}
                    href={question.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <span className="text-white text-sm">{question.title}</span>
                      {question.exam && <span className="text-xs text-zinc-400 block">{question.exam}</span>}
                    </div>
                    <Download className="h-4 w-4 text-purple-400" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

