import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Plus,
  Users, 
  Briefcase, 
  TrendingUp, 
  DollarSign,
  ArrowRight,
  Eye,
  Clock,
  CheckCircle2
} from "lucide-react"

const stats = [
  { label: "Active Tasks", value: "4", icon: Briefcase, change: "2 closing soon" },
  { label: "Total Submissions", value: "156", icon: Users, change: "+42 this week" },
  { label: "Candidates Hired", value: "12", icon: CheckCircle2, change: "+3 this month" },
  { label: "Avg. Cost/Hire", value: "$2.8k", icon: DollarSign, change: "96% below traditional" },
]

const activeTasks = [
  {
    id: "1",
    title: "Social Media Marketing Strategy",
    status: "active",
    budget: "$500",
    submissions: 24,
    maxSubmissions: 50,
    daysLeft: 3,
    topScore: 94,
    category: "Marketing",
  },
  {
    id: "2",
    title: "Financial Model for Series A",
    status: "active",
    budget: "$750",
    submissions: 18,
    maxSubmissions: 40,
    daysLeft: 5,
    topScore: 91,
    category: "Finance",
  },
  {
    id: "3",
    title: "Data Analysis Dashboard",
    status: "reviewing",
    budget: "$600",
    submissions: 31,
    maxSubmissions: 30,
    daysLeft: 0,
    topScore: 88,
    category: "Analytics",
  },
  {
    id: "4",
    title: "Product Requirements Doc",
    status: "active",
    budget: "$450",
    submissions: 15,
    maxSubmissions: 35,
    daysLeft: 2,
    topScore: 89,
    category: "Product",
  },
]

const topCandidates = [
  {
    id: "1",
    name: "Alex Johnson",
    task: "Social Media Strategy",
    score: 94,
    status: "shortlisted",
  },
  {
    id: "2",
    name: "Sarah Chen",
    task: "Financial Model",
    score: 91,
    status: "new",
  },
  {
    id: "3",
    name: "Marcus Williams",
    task: "Social Media Strategy",
    score: 90,
    status: "shortlisted",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    task: "Product Requirements",
    score: 89,
    status: "new",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
    case "reviewing":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Reviewing</Badge>
    case "closed":
      return <Badge variant="secondary">Closed</Badge>
    case "draft":
      return <Badge variant="outline">Draft</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation userType="employer" />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Employer Dashboard</h1>
            <p className="text-muted-foreground">Manage your tasks and find top talent</p>
          </div>
          <Link href="/employer/tasks/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Post New Task
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
          {/* Active Tasks */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Tasks</CardTitle>
                <Link href="/employer/tasks">
                  <Button variant="ghost" size="sm" className="gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeTasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{task.title}</h3>
                            {getStatusBadge(task.status)}
                          </div>
                          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{task.category}</Badge>
                            <span>{task.budget}</span>
                            {task.daysLeft > 0 ? (
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {task.daysLeft} days left
                              </span>
                            ) : (
                              <span className="text-blue-600">Deadline reached</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-lg font-semibold">{task.submissions}/{task.maxSubmissions}</p>
                            <p className="text-xs text-muted-foreground">Submissions</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-accent">{task.topScore}%</p>
                            <p className="text-xs text-muted-foreground">Top Score</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Submission Progress</span>
                          <span>{Math.round((task.submissions / task.maxSubmissions) * 100)}%</span>
                        </div>
                        <Progress value={(task.submissions / task.maxSubmissions) * 100} />
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Link href={`/employer/tasks/${task.id}/submissions`} className="flex-1">
                          <Button variant="outline" className="w-full gap-2 bg-transparent">
                            <Eye className="h-4 w-4" />
                            View Submissions
                          </Button>
                        </Link>
                        <Link href={`/employer/tasks/${task.id}`}>
                          <Button variant="ghost" size="icon">
                            <ArrowRight className="h-4 w-4" />
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
            {/* Top Candidates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Top Candidates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
                        {candidate.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{candidate.name}</p>
                        <p className="text-xs text-muted-foreground">{candidate.task}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-accent">{candidate.score}%</p>
                      <Badge variant={candidate.status === "shortlisted" ? "default" : "secondary"} className="text-xs">
                        {candidate.status === "shortlisted" ? "Shortlisted" : "New"}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Link href="/employer/candidates">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Candidates
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hiring Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Time to Hire</span>
                  <span className="font-medium">5 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Interview-to-Hire Rate</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Submissions/Task</span>
                  <span className="font-medium">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cost Savings</span>
                  <span className="font-medium text-accent">$770k/year</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
