"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { useSearchParams, Suspense } from "next/navigation"
import { 
  ArrowLeft,
  Search,
  Filter,
  Star,
  Eye,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Download,
  ChevronDown
} from "lucide-react"

const taskInfo = {
  title: "Social Media Marketing Strategy",
  company: "GrowthCo",
  budget: "$500",
  totalSubmissions: 24,
  status: "active",
  deadline: "3 days left",
}

const submissions = [
  {
    id: "1",
    candidate: "Alex Johnson",
    avatar: "AJ",
    submittedAt: "2 hours ago",
    score: 94,
    status: "shortlisted",
    breakdown: {
      strategic: 96,
      creativity: 92,
      feasibility: 94,
      presentation: 93,
      dataApproach: 95,
    },
    summary: "Comprehensive strategy with innovative content pillars and detailed KPI framework. Strong understanding of B2B SaaS marketing dynamics.",
  },
  {
    id: "2",
    candidate: "Sarah Chen",
    avatar: "SC",
    submittedAt: "5 hours ago",
    score: 91,
    status: "new",
    breakdown: {
      strategic: 93,
      creativity: 90,
      feasibility: 92,
      presentation: 88,
      dataApproach: 92,
    },
    summary: "Well-structured approach with focus on LinkedIn thought leadership. Good competitor analysis but could improve on measurement framework.",
  },
  {
    id: "3",
    candidate: "Marcus Williams",
    avatar: "MW",
    submittedAt: "8 hours ago",
    score: 90,
    status: "shortlisted",
    breakdown: {
      strategic: 91,
      creativity: 94,
      feasibility: 88,
      presentation: 90,
      dataApproach: 87,
    },
    summary: "Creative content ideas with viral potential. Strong on engagement tactics, needs more focus on lead generation metrics.",
  },
  {
    id: "4",
    candidate: "Emily Rodriguez",
    avatar: "ER",
    submittedAt: "12 hours ago",
    score: 88,
    status: "new",
    breakdown: {
      strategic: 89,
      creativity: 86,
      feasibility: 91,
      presentation: 87,
      dataApproach: 87,
    },
    summary: "Practical and executable strategy. Strong on budget allocation and timeline. Could benefit from more innovative content formats.",
  },
  {
    id: "5",
    candidate: "David Kim",
    avatar: "DK",
    submittedAt: "1 day ago",
    score: 85,
    status: "reviewed",
    breakdown: {
      strategic: 86,
      creativity: 84,
      feasibility: 88,
      presentation: 83,
      dataApproach: 84,
    },
    summary: "Solid foundational strategy with good industry understanding. Missing some advanced tactics for B2B engagement.",
  },
  {
    id: "6",
    candidate: "Lisa Wang",
    avatar: "LW",
    submittedAt: "1 day ago",
    score: 82,
    status: "rejected",
    breakdown: {
      strategic: 80,
      creativity: 85,
      feasibility: 82,
      presentation: 80,
      dataApproach: 83,
    },
    summary: "Good creative direction but strategy lacks depth. Needs more specific tactics for B2B SaaS audience.",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "shortlisted":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Shortlisted</Badge>
    case "new":
      return <Badge variant="secondary">New</Badge>
    case "reviewed":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Reviewed</Badge>
    case "rejected":
      return <Badge variant="outline" className="text-muted-foreground">Not Selected</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  )
}

function Loading() {
  return null;
}

export default function SubmissionsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedId, setExpandedId] = useState<string | null>("1")
  const searchParams = useSearchParams();

  const filteredSubmissions = submissions.filter((s) => {
    const matchesFilter = filter === "all" || s.status === filter
    const matchesSearch = s.candidate.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-background">
        <DashboardNavigation userType="employer" />
        
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6">
            <Link 
              href="/employer" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{taskInfo.title}</h1>
              <p className="text-muted-foreground">
                {taskInfo.totalSubmissions} submissions • {taskInfo.deadline} • {taskInfo.budget}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Export All
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold">{submissions.length}</p>
                <p className="text-xs text-muted-foreground">Total Submissions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-accent">94%</p>
                <p className="text-xs text-muted-foreground">Top Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold">88%</p>
                <p className="text-xs text-muted-foreground">Avg. Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">Shortlisted</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              {["all", "new", "shortlisted", "reviewed", "rejected"].map((f) => (
                <Button
                  key={f}
                  variant={filter === f ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(f)}
                  className="capitalize"
                >
                  {f}
                </Button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>

          {/* Submissions List */}
          <div className="mt-6 space-y-4">
            {filteredSubmissions.map((submission) => (
              <Card key={submission.id} className={expandedId === submission.id ? "ring-2 ring-ring" : ""}>
                <CardContent className="p-0">
                  <button
                    type="button"
                    className="w-full p-6 text-left"
                    onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-medium">
                          {submission.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{submission.candidate}</h3>
                            {getStatusBadge(submission.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Submitted {submission.submittedAt}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            <span className="text-2xl font-bold">{submission.score}%</span>
                          </div>
                          <p className="text-xs text-muted-foreground">AI Score</p>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${expandedId === submission.id ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </button>

                  {expandedId === submission.id && (
                    <div className="border-t border-border px-6 py-4">
                      <div className="grid gap-6 lg:grid-cols-2">
                        {/* AI Summary */}
                        <div>
                          <h4 className="font-medium mb-2">AI Evaluation Summary</h4>
                          <p className="text-sm text-muted-foreground">{submission.summary}</p>
                          
                          <div className="mt-4 space-y-3">
                            <ScoreBar label="Strategic Thinking" value={submission.breakdown.strategic} />
                            <ScoreBar label="Creativity" value={submission.breakdown.creativity} />
                            <ScoreBar label="Feasibility" value={submission.breakdown.feasibility} />
                            <ScoreBar label="Presentation" value={submission.breakdown.presentation} />
                            <ScoreBar label="Data Approach" value={submission.breakdown.dataApproach} />
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                          <div className="rounded-lg border border-border p-4">
                            <h4 className="font-medium mb-3">Quick Actions</h4>
                            <div className="grid gap-2 sm:grid-cols-2">
                              <Link href={`/employer/submissions/${submission.id}`}>
                                <Button variant="outline" className="w-full gap-2 bg-transparent">
                                  <Eye className="h-4 w-4" />
                                  View Full Submission
                                </Button>
                              </Link>
                              <Button variant="outline" className="gap-2 bg-transparent">
                                <MessageSquare className="h-4 w-4" />
                                Message Candidate
                              </Button>
                              {submission.status !== "shortlisted" && (
                                <Button className="gap-2 bg-green-600 hover:bg-green-700">
                                  <Star className="h-4 w-4" />
                                  Shortlist
                                </Button>
                              )}
                              {submission.status !== "rejected" && (
                                <Button variant="outline" className="gap-2 text-destructive hover:bg-destructive/10 bg-transparent">
                                  <XCircle className="h-4 w-4" />
                                  Reject
                                </Button>
                              )}
                            </div>
                          </div>

                          <div className="rounded-lg bg-muted p-4">
                            <h4 className="font-medium mb-2">Candidate Profile</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Completed Tasks</span>
                                <span>8</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Avg. Score</span>
                                <span>91%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Top Skills</span>
                                <span>Marketing, Strategy</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </Suspense>
  )
}
