"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  ArrowLeft,
  Clock, 
  DollarSign, 
  Building2,
  Users,
  Calendar,
  CheckCircle2,
  Upload,
  FileText,
  AlertCircle
} from "lucide-react"

// Mock task data
const task = {
  id: "1",
  title: "Create Social Media Marketing Strategy",
  company: "GrowthCo",
  companyLogo: null,
  category: "Marketing",
  budget: "$500",
  deadline: "5 days",
  submissions: 24,
  maxSubmissions: 50,
  postedDate: "Jan 12, 2026",
  description: `We're looking for a talented marketing strategist to develop a comprehensive 30-day social media marketing strategy for our B2B SaaS product.

**About GrowthCo:**
We're a fast-growing SaaS company that helps small businesses manage their customer relationships. We're looking to expand our presence on LinkedIn, Twitter, and Instagram to reach more small business owners.

**What we need:**
- A detailed content calendar for 30 days
- Platform-specific strategies for LinkedIn, Twitter, and Instagram
- Content pillar recommendations
- Engagement tactics and community building strategies
- KPIs and measurement framework
- Competitor analysis summary

**Deliverables:**
1. Strategy document (PDF or Google Doc)
2. Content calendar spreadsheet
3. 5 sample post mockups
4. Brief presentation deck (optional but appreciated)`,
  requirements: [
    "Experience with B2B social media marketing",
    "Understanding of SaaS industry dynamics",
    "Strong written communication skills",
    "Proficiency with design tools (Canva, Figma, etc.)",
    "Analytics mindset",
  ],
  skills: ["Content Strategy", "Social Media", "B2B Marketing", "Analytics", "Copywriting"],
  evaluationCriteria: [
    { name: "Strategic Thinking", weight: "30%" },
    { name: "Creativity & Originality", weight: "25%" },
    { name: "Practical Feasibility", weight: "20%" },
    { name: "Presentation Quality", weight: "15%" },
    { name: "Data-Driven Approach", weight: "10%" },
  ],
}

export default function TaskDetailPage() {
  const [isApplying, setIsApplying] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link 
              href="/tasks" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tasks
            </Link>
            
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{task.category}</Badge>
                  <span className="text-sm text-muted-foreground">Posted {task.postedDate}</span>
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  {task.title}
                </h1>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{task.company}</p>
                    <p className="text-sm text-muted-foreground">Verified Employer</p>
                  </div>
                </div>
              </div>

              <Card className="w-full lg:w-80">
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{task.budget}</p>
                    <p className="text-sm text-muted-foreground">Task Budget</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                      </div>
                      <p className="mt-1 font-medium">{task.deadline}</p>
                      <p className="text-xs text-muted-foreground">Deadline</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                      </div>
                      <p className="mt-1 font-medium">{task.submissions}/{task.maxSubmissions}</p>
                      <p className="text-xs text-muted-foreground">Submissions</p>
                    </div>
                  </div>
                  <Button 
                    className="mt-6 w-full" 
                    size="lg"
                    onClick={() => setIsApplying(true)}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>Task Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {task.description.split('\n').map((paragraph, index) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return <h4 key={index} className="mt-4 font-semibold text-foreground">{paragraph.replace(/\*\*/g, '')}</h4>
                        }
                        if (paragraph.startsWith('- ')) {
                          return <li key={index} className="ml-4">{paragraph.substring(2)}</li>
                        }
                        if (paragraph.match(/^\d\. /)) {
                          return <li key={index} className="ml-4">{paragraph.substring(3)}</li>
                        }
                        return paragraph ? <p key={index}>{paragraph}</p> : null
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {task.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Evaluation Criteria */}
                <Card>
                  <CardHeader>
                    <CardTitle>How Your Submission Will Be Evaluated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {task.evaluationCriteria.map((criteria) => (
                        <div key={criteria.name} className="flex items-center justify-between">
                          <span className="text-muted-foreground">{criteria.name}</span>
                          <Badge variant="outline">{criteria.weight}</Badge>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                      <AlertCircle className="mr-1 inline h-4 w-4" />
                      AI will evaluate your submission instantly. Top performers will be invited for interviews.
                    </p>
                  </CardContent>
                </Card>

                {/* Application Form */}
                {isApplying && (
                  <Card id="apply-form">
                    <CardHeader>
                      <CardTitle>Submit Your Work</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cover">Cover Letter / Approach Summary</Label>
                        <Textarea
                          id="cover"
                          placeholder="Briefly describe your approach to this task and why you're the right person for it..."
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="link">Link to Your Work (Optional)</Label>
                        <Input
                          id="link"
                          type="url"
                          placeholder="https://docs.google.com/..."
                        />
                        <p className="text-xs text-muted-foreground">
                          Google Docs, Notion, Figma, GitHub, etc.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="files">Upload Files</Label>
                        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border p-8">
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                            <p className="mt-2 text-sm text-muted-foreground">
                              Drag and drop files here, or click to browse
                            </p>
                            <Input
                              id="files"
                              type="file"
                              multiple
                              className="mt-4"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        {files.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {files.map((file) => (
                              <div key={file.name} className="flex items-center gap-2 text-sm">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <span>{file.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button className="flex-1" size="lg">
                          Submit Application
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => setIsApplying(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Required Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {task.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Company Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">About {task.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      GrowthCo is a B2B SaaS company helping small businesses manage customer relationships. 
                      Founded in 2023, they&apos;ve grown to serve 5,000+ businesses.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Industry</span>
                        <span>SaaS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Company Size</span>
                        <span>50-200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tasks Posted</span>
                        <span>12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hire Rate</span>
                        <span>24%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Similar Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Similar Tasks</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Content Marketing Strategy", company: "StartupX", budget: "$450" },
                      { title: "Brand Positioning Research", company: "BrandCo", budget: "$600" },
                      { title: "Email Marketing Campaign", company: "GrowthLabs", budget: "$350" },
                    ].map((similarTask) => (
                      <Link 
                        key={similarTask.title} 
                        href="/tasks/2"
                        className="block rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                      >
                        <p className="font-medium text-sm">{similarTask.title}</p>
                        <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                          <span>{similarTask.company}</span>
                          <span>{similarTask.budget}</span>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
