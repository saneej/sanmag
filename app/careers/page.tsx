"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, Upload, CheckCircle } from "lucide-react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import LogoPattern from "@/components/logo-pattern"
import IconBackground from "@/components/icon-background"

export default function CareersPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, resume: e.target.files![0] }))
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formData = new FormData(e.target as HTMLFormElement)

      // Add utf8 check
      formData.append("utf8", "✓")

      // Submit to FormKeep
      await axios.post("https://formkeep.com/f/3035e787f30c", formData, {
        headers: {
          Accept: "application/json",
        },
      })

      setIsSubmitted(true)

      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
        resume: null,
      })
      setFileName("")
    } catch (err) {
      console.error("Form submission error:", err)
      setError("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openPositions = [
    {
      title: "Mathematics Tutor",
      type: "Full-time",
      description:
        "We're looking for an experienced Mathematics tutor to join our team. The ideal candidate should have a strong background in teaching Mathematics at the high school and undergraduate level.",
    },
    {
      title: "Physics Instructor",
      type: "Part-time",
      description:
        "Seeking a Physics instructor with experience in teaching Plus One, Plus Two, and B.Tech students. Must have excellent communication skills and a passion for teaching.",
    },
    {
      title: "Civil Engineering Faculty",
      type: "Full-time",
      description:
        "We're hiring a Civil Engineering faculty member to teach B.Tech and M.Tech students. The candidate should have a minimum of 3 years of teaching experience.",
    },
    {
      title: "Administrative Assistant",
      type: "Full-time",
      description:
        "Looking for an administrative assistant to handle day-to-day operations, student inquiries, and administrative tasks. Good communication and organizational skills required.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />
      <IconBackground opacity={0.03} />

      <section className="pt-32 pb-16">
        <LogoPattern opacity={0.02} />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-zinc-300">
              Be part of our mission to provide exceptional education and shape the future of students.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Current Openings</h2>

            <div className="space-y-6 mb-16">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      <p className="text-purple-300 text-sm">{position.type}</p>
                      <p className="text-zinc-300 mt-2">{position.description}</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white whitespace-nowrap"
                      onClick={() =>
                        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div id="application-form" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6">Application Form</h2>

              {isSubmitted ? (
                <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
                  <p className="text-zinc-300 mb-6">
                    Thank you for your interest in joining Magus Academy. We have received your application and will
                    contact you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://formkeep.com/f/3035e787f30c"
                  accept-charset="UTF-8"
                  encType="multipart/form-data"
                  method="POST"
                  className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <input type="hidden" name="utf8" value="✓" />
                  {error && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-white">{error}</div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-white">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-white">
                        Position Applying For <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formState.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        required
                      >
                        <option value="" disabled>
                          Select a position
                        </option>
                        <option value="Mathematics Tutor">Mathematics Tutor</option>
                        <option value="Physics Instructor">Physics Instructor</option>
                        <option value="Civil Engineering Faculty">Civil Engineering Faculty</option>
                        <option value="Administrative Assistant">Administrative Assistant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-white">
                        Years of Experience <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formState.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        required
                      >
                        <option value="" disabled>
                          Select experience
                        </option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="message" className="text-white">
                        Cover Letter / Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Tell us about yourself and why you're interested in this position"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="resume" className="text-white">
                        Upload Resume (PDF) <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                        <label
                          htmlFor="resume"
                          className="flex items-center justify-center w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
                        >
                          <Upload className="h-5 w-5 text-purple-300 mr-2" />
                          <span className="text-white">{fileName ? fileName : "Choose file"}</span>
                        </label>
                      </div>
                      <p className="text-zinc-400 text-xs">Max file size: 5MB</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-950 to-black">
        <LogoPattern opacity={0.02} />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Why Work With Us?</h2>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Growth Opportunities</h3>
                <p className="text-zinc-300">Continuous learning and professional development opportunities.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Collaborative Environment</h3>
                <p className="text-zinc-300">Work with passionate educators in a supportive team setting.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-2">Make an Impact</h3>
                <p className="text-zinc-300">Help shape the future of students and contribute to their success.</p>
              </div>
            </div>
            <p className="text-zinc-300">
              For any queries regarding job opportunities, please contact us at{" "}
              <a href="mailto:mail@magusacademy.in" className="text-purple-300 hover:text-purple-200 transition-colors">
                mail@magusacademy.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

