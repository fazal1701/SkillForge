import Link from "next/link"
import { DashboardNavigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink,
  Download,
  Share2,
  Calendar,
  Building2,
  Award,
  TrendingUp,
  Star
} from "lucide-react"

const portfolioItems = [
  {
    id: "1",
    title: "Social Media Marketing Strategy",
    company: "GrowthCo",
    category: "Marketing",
    completedDate: "Jan 15, 2026",
    score: 94,
    earnings: "$500",
    description: "Developed a comprehensive 30-day social media marketing strategy for a B2B SaaS product, including content calendar, platform-specific tactics, and KPI framework.",
    skills: ["Content Strategy", "Social Media", "B2B Marketing"],
    featured: true,
  },
  {
    id: "2",
    title: "Product Requirements Document",
    company: "InnovateTech",
    category: "Product",
    completedDate: "Jan 8, 2026",
    score: 91,
    earnings: "$450",
    description: "Wrote a comprehensive PRD for an AI-powered customer support chatbot feature, including user stories, technical requirements, and success metrics.",
    skills: ["Product Management", "Technical Writing", "AI/ML"],
    featured: true,
  },
  {
    id: "3",
    title: "Financial Model for Series A",
    company: "TechVentures",
    category: "Finance",
    completedDate: "Dec 28, 2025",
    score: 88,
    earnings: "$750",
    description: "Built a detailed financial model with 3-year projections for a fintech startup, including revenue forecasts, unit economics, and scenario analysis.",
    skills: ["Financial Modeling", "Excel", "Startup Finance"],
    featured: false,
  },
  {
    id: "4",
    title: "Data Analysis Dashboard",
    company: "DataDriven Inc.",
    category: "Analytics",
    completedDate: "Dec 20, 2025",
    score: 86,
    earnings: "$600",
    description: "Designed and created a Tableau dashboard analyzing customer churn patterns with actionable insights and recommendations.",
    skills: ["Tableau", "Data Analysis", "Visualization"],
    featured: false,
  },
  {
    id: "5",
    title: "Competitive Analysis Report",
    company: "RetailNext",
    category: "Research",
    completedDate: "Dec 10, 2025",
    score: 89,
    earnings: "$550",
    description: "Conducted comprehensive competitive analysis of top 10 e-commerce platforms with strategic recommendations.",
    skills: ["Market Research", "Competitive Analysis", "E-commerce"],
    featured: false,
  },
]

const profileStats = {
  totalProjects: 8,
  avgScore: 92,
  totalEarnings: "$2,850",
  topCategory: "Marketing",
  completionRate: "100%",
  hireOffers: 3,
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation userType="candidate" />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
            <p className="text-muted-foreground">Your verified work history on SkillForge</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share Portfolio
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Profile Stats */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.totalProjects}</p>
                <p className="text-sm text-muted-foreground">Completed Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.avgScore}%</p>
                <p className="text-sm text-muted-foreground">Avg. AI Score</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.totalEarnings}</p>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.topCategory}</p>
                <p className="text-sm text-muted-foreground">Top Category</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.completionRate}</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{profileStats.hireOffers}</p>
                <p className="text-sm text-muted-foreground">Hire Offers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Verified Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Content Strategy", "Social Media", "B2B Marketing", "Product Management", "Technical Writing", "Financial Modeling", "Excel", "Data Analysis", "Tableau", "Market Research"].map((skill) => (
                <Badge key={skill} variant="outline" className="py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Work */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Featured Work</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {portfolioItems.filter(item => item.featured).map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="h-2 bg-accent" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{item.score}%</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {item.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.completedDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Work */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">All Completed Work</h2>
          <div className="mt-4 space-y-4">
            {portfolioItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        {item.featured && (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                            <Star className="mr-1 h-3 w-3 fill-amber-600" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-2 font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-right">
                      <div>
                        <div className="flex items-center gap-1 justify-end">
                          <TrendingUp className="h-4 w-4 text-accent" />
                          <span className="text-lg font-semibold">{item.score}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">AI Score</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{item.earnings}</p>
                        <p className="text-xs text-muted-foreground">Earned</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 justify-end text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span className="text-sm">{item.company}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.completedDate}</p>
                      </div>
                      <Link href={`/dashboard/submissions/${item.id}`}>
                        <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                          View <ExternalLink className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
