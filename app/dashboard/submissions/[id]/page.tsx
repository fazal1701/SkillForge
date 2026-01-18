import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft,
  Building2,
  Calendar,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Lightbulb,
  Target,
  Award,
  MessageSquare
} from "lucide-react"

const submission = {
  id: "1",
  task: {
    title: "Social Media Marketing Strategy",
    company: "GrowthCo",
    category: "Marketing",
    budget: "$500",
  },
  status: "accepted",
  submittedAt: "Jan 15, 2026",
  evaluatedAt: "Jan 15, 2026",
  overallScore: 94,
  earnings: "$500",
  ranking: "1 of 24",
  breakdown: [
    { 
      name: "Strategic Thinking", 
      score: 96, 
      weight: "30%",
      feedback: "Excellent understanding of B2B SaaS dynamics. Strategy aligns well with business objectives and shows clear path to measurable outcomes."
    },
    { 
      name: "Creativity & Originality", 
      score: 92, 
      weight: "25%",
      feedback: "Innovative content pillars with unique angles. Good differentiation from competitor approaches."
    },
    { 
      name: "Practical Feasibility", 
      score: 94, 
      weight: "20%",
      feedback: "Realistic timeline and resource requirements. Budget allocation is appropriate for proposed activities."
    },
    { 
      name: "Presentation Quality", 
      score: 93, 
      weight: "15%",
      feedback: "Well-structured document with clear sections. Visual aids enhance understanding."
    },
    { 
      name: "Data-Driven Approach", 
      score: 95, 
      weight: "10%",
      feedback: "Strong KPI framework with relevant metrics. Good use of industry benchmarks."
    },
  ],
  strengths: [
    "Deep understanding of B2B SaaS marketing dynamics",
    "Comprehensive content calendar with detailed posting schedule",
    "Strong measurement framework with actionable KPIs",
    "Innovative approach to LinkedIn thought leadership",
    "Clear budget allocation and ROI projections",
  ],
  improvements: [
    "Could include more specific competitor response strategies",
    "Consider adding crisis management protocols",
    "Expand on community engagement tactics",
  ],
  aiSummary: `This submission demonstrates exceptional strategic thinking and a thorough understanding of B2B SaaS marketing. The candidate has created a comprehensive 30-day strategy that balances brand building with lead generation.

The content pillar framework is particularly strong, with clear differentiation between educational, thought leadership, and promotional content. The measurement framework provides clear metrics for success tracking.

The submission stands out for its practical feasibility - all proposed activities can be executed within the given timeline and budget constraints. The candidate has shown good judgment in prioritizing high-impact activities.`,
  deliverables: [
    { name: "Strategy Document", type: "PDF", size: "2.4 MB" },
    { name: "Content Calendar", type: "XLSX", size: "156 KB" },
    { name: "Sample Posts", type: "PDF", size: "1.8 MB" },
    { name: "Presentation Deck", type: "PPTX", size: "3.2 MB" },
  ],
}

function ScoreRing({ score, size = "lg" }: { score: number; size?: "sm" | "lg" }) {
  const radius = size === "lg" ? 60 : 30
  const stroke = size === "lg" ? 8 : 4
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className={size === "lg" ? "h-36 w-36" : "h-16 w-16"} viewBox={`0 0 ${(radius + stroke) * 2} ${(radius + stroke) * 2}`}>
        <circle
          className="text-muted"
          strokeWidth={stroke}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + stroke}
          cy={radius + stroke}
        />
        <circle
          className="text-accent transition-all duration-500"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + stroke}
          cy={radius + stroke}
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
        />
      </svg>
      <div className="absolute text-center">
        <span className={`font-bold ${size === "lg" ? "text-3xl" : "text-lg"}`}>{score}%</span>
        {size === "lg" && <p className="text-xs text-muted-foreground">Overall Score</p>}
      </div>
    </div>
  )
}

export default function SubmissionResultPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation userType="candidate" />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{submission.task.category}</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Accepted</Badge>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">{submission.task.title}</h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {submission.task.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Submitted {submission.submittedAt}
              </span>
            </div>
          </div>

          <Card className="w-full lg:w-auto">
            <CardContent className="flex items-center gap-6 p-6">
              <ScoreRing score={submission.overallScore} />
              <div className="space-y-2">
                <div>
                  <p className="text-2xl font-bold text-green-600">{submission.earnings}</p>
                  <p className="text-xs text-muted-foreground">Earned</p>
                </div>
                <div>
                  <p className="font-semibold">{submission.ranking}</p>
                  <p className="text-xs text-muted-foreground">Ranking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  AI Evaluation Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {submission.aiSummary.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Detailed Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {submission.breakdown.map((criteria) => (
                  <div key={criteria.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{criteria.name}</span>
                        <Badge variant="outline" className="text-xs">{criteria.weight}</Badge>
                      </div>
                      <span className="font-bold text-lg">{criteria.score}%</span>
                    </div>
                    <Progress value={criteria.score} className="h-2" />
                    <p className="text-sm text-muted-foreground">{criteria.feedback}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Strengths & Improvements */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Key Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {submission.strengths.map((strength) => (
                      <li key={strength} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-green-600" />
                        <span className="text-muted-foreground">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Areas for Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {submission.improvements.map((improvement) => (
                      <li key={improvement} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                        <span className="text-muted-foreground">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submission Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Submission Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Submitted</p>
                    <p className="text-xs text-muted-foreground">{submission.submittedAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">AI Evaluated</p>
                    <p className="text-xs text-muted-foreground">{submission.evaluatedAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Accepted & Paid</p>
                    <p className="text-xs text-muted-foreground">{submission.earnings} received</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Your Deliverables</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {submission.deliverables.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{file.type}</Badge>
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-4 space-y-2">
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <MessageSquare className="h-4 w-4" />
                  Message Employer
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  View in Portfolio
                </Button>
              </CardContent>
            </Card>

            {/* Add to Portfolio */}
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-4 text-center">
                <Award className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-2 font-medium">Added to Portfolio</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  This verified work is now part of your SkillForge portfolio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
