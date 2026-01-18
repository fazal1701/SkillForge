"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  DollarSign,
  Calendar,
  Users,
  Lightbulb,
  CheckCircle2
} from "lucide-react"

const categories = [
  "Marketing",
  "Finance",
  "Analytics",
  "Design",
  "Product",
  "Operations",
  "HR",
  "Tech",
  "Sales",
  "Research",
]

const suggestedSkills = [
  "Content Strategy",
  "Social Media",
  "Data Analysis",
  "Financial Modeling",
  "UI/UX Design",
  "Product Management",
  "Technical Writing",
  "Market Research",
  "Project Management",
  "Python",
  "SQL",
  "Excel",
]

export default function NewTaskPage() {
  const [step, setStep] = useState(1)
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [category, setCategory] = useState("")

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill])
    }
    setNewSkill("")
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation userType="employer" />
      
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/employer" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">Post a New Task</h1>
          <p className="text-muted-foreground">Create a task to find top talent through real work</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step >= s
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
              </div>
              <span className={`ml-2 text-sm ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                {s === 1 ? "Basic Info" : s === 2 ? "Requirements" : "Review"}
              </span>
              {s < 3 && <div className={`mx-4 h-px w-16 sm:w-24 ${step > s ? "bg-foreground" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
              <CardDescription>Provide the basic information about your task</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Social Media Marketing Strategy"
                />
                <p className="text-xs text-muted-foreground">
                  Be specific and descriptive to attract the right candidates
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant={category === cat ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Task Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the task in detail. Include context, objectives, and what you're looking for..."
                  rows={8}
                />
                <p className="text-xs text-muted-foreground">
                  Include background, objectives, deliverables, and evaluation criteria
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="budget"
                      type="number"
                      placeholder="500"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Typical range: $200 - $2,000
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline (Days)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="deadline"
                      type="number"
                      placeholder="7"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Typical range: 3-14 days
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxSubmissions">Maximum Submissions</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="maxSubmissions"
                    type="number"
                    placeholder="50"
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  We recommend 30-50 submissions for best results
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={() => setStep(2)} className="gap-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Requirements */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Requirements & Skills</CardTitle>
              <CardDescription>Define what skills and experience you&apos;re looking for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Required Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="default" className="gap-1 pr-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-1 rounded-full p-0.5 hover:bg-background/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addSkill(newSkill)
                      }
                    }}
                  />
                  <Button variant="outline" onClick={() => addSkill(newSkill)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground mb-2">Suggested skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {suggestedSkills.filter(s => !skills.includes(s)).slice(0, 6).map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="cursor-pointer text-xs"
                        onClick={() => addSkill(skill)}
                      >
                        + {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements & Expectations</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the requirements, qualifications, and what you expect from candidates..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliverables">Expected Deliverables</Label>
                <Textarea
                  id="deliverables"
                  placeholder="Describe exactly what candidates should submit..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="evaluation">Evaluation Criteria</Label>
                <Textarea
                  id="evaluation"
                  placeholder="How will submissions be evaluated? What matters most?"
                  rows={4}
                />
                <div className="flex items-start gap-2 rounded-lg bg-muted p-3">
                  <Lightbulb className="h-4 w-4 mt-0.5 text-amber-500" />
                  <p className="text-xs text-muted-foreground">
                    <strong>Tip:</strong> Our AI evaluates submissions on correctness, quality, clarity, 
                    and adherence to requirements. Be specific about what matters most to you.
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)} className="gap-2">
                  Review <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Your Task</CardTitle>
                <CardDescription>Make sure everything looks good before posting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border border-border p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary">Marketing</Badge>
                      <h3 className="mt-2 text-lg font-semibold">Social Media Marketing Strategy</h3>
                    </div>
                    <span className="text-2xl font-bold">$500</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Develop a comprehensive 30-day social media marketing strategy for a B2B SaaS product...
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Content Strategy", "Social Media", "B2B Marketing"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-lg font-semibold">7 days</p>
                      <p className="text-xs text-muted-foreground">Deadline</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">50</p>
                      <p className="text-xs text-muted-foreground">Max Submissions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">~32</p>
                      <p className="text-xs text-muted-foreground">Expected Submissions</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="font-medium">Estimated Results</h4>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submissions within 3 days</span>
                      <span>~20-30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AI-scored by deadline</span>
                      <span>All submissions</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Top candidates to review</span>
                      <span>5-10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected hire timeline</span>
                      <span>~1 week</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">Total Cost</p>
                    <p className="text-sm text-muted-foreground">Task budget + 25% platform fee</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">$625</p>
                    <p className="text-sm text-muted-foreground">$500 + $125 fee</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Link href="/employer">
                  <Button className="gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Post Task
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
