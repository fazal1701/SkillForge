"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/navigation";
import { 
  Users, Briefcase, DollarSign, TrendingUp, Building2, 
  CheckCircle2, Clock, AlertTriangle, ArrowUpRight, ArrowDownRight,
  BarChart3, Activity, Target, Zap
} from "lucide-react";

const stats = [
  { 
    label: "Total Users", 
    value: "12,847", 
    change: "+18%", 
    trend: "up",
    icon: Users,
    description: "vs last month"
  },
  { 
    label: "Active Tasks", 
    value: "342", 
    change: "+24%", 
    trend: "up",
    icon: Briefcase,
    description: "currently open"
  },
  { 
    label: "Total Payouts", 
    value: "$847,250", 
    change: "+32%", 
    trend: "up",
    icon: DollarSign,
    description: "all time"
  },
  { 
    label: "Completion Rate", 
    value: "78%", 
    change: "-2%", 
    trend: "down",
    icon: Target,
    description: "task completion"
  },
];

const recentActivity = [
  { type: "signup", user: "Sarah Chen", role: "Candidate", time: "2 min ago" },
  { type: "task", company: "Google", task: "Data Pipeline Project", time: "15 min ago" },
  { type: "submission", user: "Mike Johnson", task: "Marketing Analysis", time: "32 min ago" },
  { type: "payment", user: "Emily Davis", amount: "$450", time: "1 hour ago" },
  { type: "signup", user: "Acme Corp", role: "Employer", time: "2 hours ago" },
];

const topCompanies = [
  { name: "Google", tasks: 28, candidates: 156, spend: "$42,000" },
  { name: "Microsoft", tasks: 24, candidates: 132, spend: "$36,000" },
  { name: "Amazon", tasks: 22, candidates: 128, spend: "$33,000" },
  { name: "Meta", tasks: 18, candidates: 94, spend: "$27,000" },
  { name: "Apple", tasks: 15, candidates: 78, spend: "$22,500" },
];

const topCandidates = [
  { name: "Alex Rivera", tasks: 12, earned: "$4,200", rating: 4.9 },
  { name: "Jordan Kim", tasks: 10, earned: "$3,800", rating: 4.8 },
  { name: "Sam Patel", tasks: 9, earned: "$3,400", rating: 4.9 },
  { name: "Chris Lee", tasks: 8, earned: "$3,100", rating: 4.7 },
  { name: "Taylor Brown", tasks: 7, earned: "$2,800", rating: 4.8 },
];

const pendingReviews = [
  { task: "API Integration Test", company: "Stripe", submissions: 5, deadline: "2 days" },
  { task: "Brand Guidelines Design", company: "Figma", submissions: 8, deadline: "1 day" },
  { task: "Content Strategy Doc", company: "HubSpot", submissions: 3, deadline: "3 days" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Platform analytics and management</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Export Report</Button>
              <Button>System Settings</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="gap-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart Placeholder */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Revenue Overview
                </CardTitle>
                <CardDescription>Monthly platform revenue and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Revenue chart visualization</p>
                    <p className="text-sm text-muted-foreground">$847,250 total revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-full ${
                        activity.type === "signup" ? "bg-green-100" :
                        activity.type === "task" ? "bg-blue-100" :
                        activity.type === "submission" ? "bg-amber-100" :
                        "bg-emerald-100"
                      }`}>
                        {activity.type === "signup" && <Users className="h-3 w-3 text-green-600" />}
                        {activity.type === "task" && <Briefcase className="h-3 w-3 text-blue-600" />}
                        {activity.type === "submission" && <CheckCircle2 className="h-3 w-3 text-amber-600" />}
                        {activity.type === "payment" && <DollarSign className="h-3 w-3 text-emerald-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">
                          {activity.type === "signup" && `${activity.user} joined as ${activity.role}`}
                          {activity.type === "task" && `${activity.company} posted "${activity.task}"`}
                          {activity.type === "submission" && `${activity.user} submitted "${activity.task}"`}
                          {activity.type === "payment" && `${activity.user} received ${activity.amount}`}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="companies" className="space-y-6">
            <TabsList>
              <TabsTrigger value="companies" className="gap-2">
                <Building2 className="h-4 w-4" />
                Top Companies
              </TabsTrigger>
              <TabsTrigger value="candidates" className="gap-2">
                <Users className="h-4 w-4" />
                Top Candidates
              </TabsTrigger>
              <TabsTrigger value="reviews" className="gap-2">
                <Clock className="h-4 w-4" />
                Pending Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="companies">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Companies</CardTitle>
                  <CardDescription>Companies with most tasks and engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 font-medium">Company</th>
                          <th className="text-left py-3 font-medium">Tasks Posted</th>
                          <th className="text-left py-3 font-medium">Candidates</th>
                          <th className="text-left py-3 font-medium">Total Spend</th>
                          <th className="text-right py-3 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topCompanies.map((company, i) => (
                          <tr key={i} className="border-b last:border-0">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback>{company.name[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{company.name}</span>
                              </div>
                            </td>
                            <td className="py-4">{company.tasks}</td>
                            <td className="py-4">{company.candidates}</td>
                            <td className="py-4 font-medium">{company.spend}</td>
                            <td className="py-4 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="candidates">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Candidates</CardTitle>
                  <CardDescription>Candidates with highest completion rates and earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 font-medium">Candidate</th>
                          <th className="text-left py-3 font-medium">Tasks Completed</th>
                          <th className="text-left py-3 font-medium">Total Earned</th>
                          <th className="text-left py-3 font-medium">Avg Rating</th>
                          <th className="text-right py-3 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topCandidates.map((candidate, i) => (
                          <tr key={i} className="border-b last:border-0">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback>{candidate.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{candidate.name}</span>
                              </div>
                            </td>
                            <td className="py-4">{candidate.tasks}</td>
                            <td className="py-4 font-medium">{candidate.earned}</td>
                            <td className="py-4">
                              <Badge variant="secondary">{candidate.rating}/5.0</Badge>
                            </td>
                            <td className="py-4 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Task Reviews</CardTitle>
                  <CardDescription>Tasks awaiting AI evaluation or manual review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingReviews.map((review, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-amber-100 rounded-lg">
                            <AlertTriangle className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">{review.task}</p>
                            <p className="text-sm text-muted-foreground">{review.company} - {review.submissions} submissions</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">Due in {review.deadline}</Badge>
                          <Button size="sm">Review Now</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
