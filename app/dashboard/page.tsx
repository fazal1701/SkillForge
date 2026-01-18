import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Star,
  Eye
} from "lucide-react"

const stats = [
  { label: "Total Earned", value: "$2,850", icon: DollarSign, change: "+$750 this month" },
  { label: "Tasks Completed", value: "8", icon: Briefcase, change: "+3 this month" },
  { label: "Avg. Score", value: "92%", icon: TrendingUp, change: "+5% from last month" },
  { label: "Active Applications", value: "3", icon: Clock, change: "2 pending review" },
]

const recentSubmissions = [
  {
    id: "1",
    task: "Social Media Marketing Strategy",
    company: "GrowthCo",
    status: "accepted",
    score: 94,
    earnings: "$500",
    date: "Jan 15, 2026",
  },
  {
    id: "2",
    task: "Financial Model for Series A",
    company: "TechVentures",
    status: "pending",
    score: null,
    earnings: "$750",
    date: "Jan 14, 2026",
  },
  {
    id: "3",
    task: "Data Dashboard Design",
    company: "DataDriven Inc.",
    status: "reviewing",
    score: 88,
    earnings: "$600",
    date: "Jan 12, 2026",
  },
  {
    id: "4",
    task: "Product Requirements Doc",
    company: "InnovateTech",
    status: "accepted",
    score: 91,
    earnings: "$450",
    date: "Jan 8, 2026",
  },
]

const recommendedTasks = [
  {
    id: "5",
    title: "Brand Strategy Document",
    company: "BrandCo",
    budget: "$550",
    match: 95,
    category: "Marketing",
  },
  {
    id: "6",
    title: "Competitive Analysis Report",
    company: "StrategyHub",
    budget: "$600",
    match: 92,
    category: "Research",
  },
  {
    id: "7",
    title: "Email Campaign Design",
    company: "GrowthLabs",
    budget: "$400",
    match: 88,
    category: "Marketing",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "accepted":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Accepted</Badge>
    case "pending":
      return <Badge variant="secondary">Pending</Badge>
    case "reviewing":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Under Review</Badge>
    case "rejected":
      return <Badge variant="destructive">Not Selected</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function CandidateDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation userType="candidate" />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex</h1>
            <p className="text-muted-foreground">Here&apos;s your performance overview</p>
          </div>
          <Link href="/tasks">
            <Button className="gap-2">
              Browse Tasks <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Recent Submissions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Submissions</CardTitle>
                <Link href="/dashboard/portfolio">
                  <Button variant="ghost" size="sm" className="gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSubmissions.map((submission) => (
                    <div
                      key={submission.id}
                      className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{submission.task}</h3>
                          {getStatusBadge(submission.status)}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {submission.company} • {submission.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {submission.score !== null && (
                          <div className="text-right">
                            <p className="text-lg font-semibold">{submission.score}%</p>
                            <p className="text-xs text-muted-foreground">AI Score</p>
                          </div>
                        )}
                        <div className="text-right">
                          <p className="text-lg font-semibold">{submission.earnings}</p>
                          <p className="text-xs text-muted-foreground">
                            {submission.status === "accepted" ? "Earned" : "Potential"}
                          </p>
                        </div>
                        <Link href={`/dashboard/submissions/${submission.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Profile Strength</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">75%</span>
                  <span className="text-sm text-muted-foreground">Good</span>
                </div>
                <Progress value={75} className="mt-2" />
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Basic info complete
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Skills added
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Add portfolio link
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Complete bio
                  </div>
                </div>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="mt-4 w-full bg-transparent" size="sm">
                    Complete Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recommended Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedTasks.map((task) => (
                  <Link
                    key={task.id}
                    href={`/tasks/${task.id}`}
                    className="block rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{task.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{task.company}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">{task.budget}</Badge>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <Badge variant="secondary" className="text-xs">{task.category}</Badge>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {task.match}% match
                      </span>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
