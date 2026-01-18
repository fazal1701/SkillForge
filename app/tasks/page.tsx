"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  Clock, 
  DollarSign, 
  Building2,
  Users,
  ArrowRight,
  ChevronDown
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Loading from "./loading"

const categories = [
  "All Categories",
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

const tasks = [
  {
    id: "1",
    title: "Create Social Media Marketing Strategy",
    company: "GrowthCo",
    category: "Marketing",
    budget: "$500",
    deadline: "5 days",
    submissions: 24,
    description: "Develop a comprehensive 30-day social media marketing strategy for a B2B SaaS product targeting small business owners.",
    skills: ["Content Strategy", "Social Media", "B2B Marketing"],
  },
  {
    id: "2",
    title: "Financial Model for Series A Startup",
    company: "TechVentures",
    category: "Finance",
    budget: "$750",
    deadline: "7 days",
    submissions: 18,
    description: "Build a detailed financial model with 3-year projections for a fintech startup preparing for Series A fundraising.",
    skills: ["Financial Modeling", "Excel", "Startup Finance"],
  },
  {
    id: "3",
    title: "Data Analysis Dashboard Design",
    company: "DataDriven Inc.",
    category: "Analytics",
    budget: "$600",
    deadline: "6 days",
    submissions: 31,
    description: "Design and create a Tableau dashboard analyzing customer churn patterns and providing actionable insights.",
    skills: ["Tableau", "Data Analysis", "Visualization"],
  },
  {
    id: "4",
    title: "Mobile App UI/UX Redesign",
    company: "AppStudio",
    category: "Design",
    budget: "$800",
    deadline: "10 days",
    submissions: 42,
    description: "Redesign the onboarding flow and main dashboard of a fitness tracking mobile application.",
    skills: ["UI Design", "UX Research", "Figma"],
  },
  {
    id: "5",
    title: "Product Requirements Document",
    company: "InnovateTech",
    category: "Product",
    budget: "$450",
    deadline: "4 days",
    submissions: 15,
    description: "Write a comprehensive PRD for a new AI-powered customer support chatbot feature.",
    skills: ["Product Management", "Technical Writing", "AI/ML"],
  },
  {
    id: "6",
    title: "HR Policy Documentation",
    company: "ScaleUp Corp",
    category: "HR",
    budget: "$400",
    deadline: "5 days",
    submissions: 12,
    description: "Develop a comprehensive remote work policy and employee handbook section for a growing startup.",
    skills: ["HR Policy", "Technical Writing", "Compliance"],
  },
  {
    id: "7",
    title: "E-commerce Platform Analysis",
    company: "RetailNext",
    category: "Research",
    budget: "$550",
    deadline: "6 days",
    submissions: 22,
    description: "Conduct competitive analysis of top 10 e-commerce platforms and provide strategic recommendations.",
    skills: ["Market Research", "Competitive Analysis", "E-commerce"],
  },
  {
    id: "8",
    title: "Sales Enablement Materials",
    company: "SalesForce Pro",
    category: "Sales",
    budget: "$500",
    deadline: "5 days",
    submissions: 19,
    description: "Create a sales deck, battle cards, and objection handling guide for enterprise software.",
    skills: ["Sales Strategy", "Presentation Design", "B2B Sales"],
  },
  {
    id: "9",
    title: "Full-Stack Feature Implementation",
    company: "CodeCraft",
    category: "Tech",
    budget: "$1,200",
    deadline: "14 days",
    submissions: 38,
    description: "Build a real-time notification system with React frontend and Node.js backend, including WebSocket integration.",
    skills: ["React", "Node.js", "WebSockets"],
  },
]

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const searchParams = useSearchParams()

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || task.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Header */}
          <section className="border-b border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse Tasks</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Find real tasks from real companies. Complete them, get paid, build your portfolio.
              </p>

              {/* Search and Filter */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="h-10 w-full appearance-none rounded-md border border-input bg-background px-3 pr-10 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:w-48"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Tasks Grid */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredTasks.length} tasks
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  More Filters
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTasks.map((task) => (
                  <Card key={task.id} className="flex flex-col transition-shadow hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <Badge variant="secondary">{task.category}</Badge>
                        <span className="text-lg font-semibold text-foreground">{task.budget}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold leading-tight">
                        {task.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-1 pb-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {task.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {task.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 border-t border-border pt-4">
                      <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{task.company}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{task.deadline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{task.submissions}</span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/tasks/${task.id}`} className="w-full">
                        <Button className="w-full gap-2">
                          View Task <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredTasks.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">No tasks found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All Categories")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Suspense>
  )
}
