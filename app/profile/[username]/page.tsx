import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  MapPin, Briefcase, GraduationCap, ExternalLink, 
  Star, CheckCircle2, Calendar, Award, TrendingUp
} from "lucide-react";

// This would come from the database in a real app
const profile = {
  name: "John Doe",
  username: "johndoe",
  headline: "Data Analyst | Business Intelligence Specialist",
  bio: "Recent graduate passionate about transforming raw data into actionable business insights. Experienced with Python, SQL, Tableau, and modern BI tools. Looking to join a data-driven organization where I can grow and contribute.",
  location: "Austin, TX",
  workPreference: "Flexible",
  education: "B.S. Business Analytics, UT Austin",
  avatar: null,
  joinedDate: "September 2025",
  skills: ["Data Analysis", "Python", "SQL", "Tableau", "Excel", "Power BI", "Statistics"],
  links: {
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    portfolio: null,
  },
  stats: {
    tasksCompleted: 8,
    avgScore: 92,
    totalEarned: "$2,850",
    topPercentile: 15,
  },
  completedTasks: [
    {
      id: "1",
      title: "E-commerce Sales Dashboard",
      company: "TechFlow",
      companyLogo: null,
      date: "Jan 2026",
      score: 94,
      skills: ["Tableau", "SQL", "Data Visualization"],
      feedback: "Excellent attention to detail and clean visualizations. The dashboard exceeded our expectations.",
    },
    {
      id: "2",
      title: "Customer Churn Analysis",
      company: "RetailMax",
      companyLogo: null,
      date: "Dec 2025",
      score: 91,
      skills: ["Python", "Machine Learning", "Statistics"],
      feedback: "Strong analytical approach with actionable recommendations.",
    },
    {
      id: "3",
      title: "Marketing ROI Report",
      company: "GrowthCo",
      companyLogo: null,
      date: "Nov 2025",
      score: 89,
      skills: ["Excel", "Data Analysis", "Reporting"],
      feedback: "Clear presentation of complex data. Good use of visualizations.",
    },
    {
      id: "4",
      title: "Inventory Optimization Model",
      company: "SupplyPro",
      companyLogo: null,
      date: "Oct 2025",
      score: 95,
      skills: ["Python", "Optimization", "SQL"],
      feedback: "Outstanding work. The model has already saved us significant costs.",
    },
  ],
  badges: [
    { name: "Rising Star", description: "Completed 5+ tasks with 90%+ scores" },
    { name: "Data Pro", description: "Specialized in data analysis tasks" },
    { name: "Fast Learner", description: "Improved score by 10%+ over 3 tasks" },
  ],
};

export default function PublicProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32 mx-auto md:mx-0">
                  <AvatarImage src={profile.avatar || undefined} alt={profile.name} />
                  <AvatarFallback className="text-4xl">
                    {profile.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                    <Badge variant="secondary" className="w-fit mx-auto md:mx-0">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{profile.headline}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {profile.workPreference}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      {profile.education}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {profile.joinedDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {profile.links.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://${profile.links.linkedin}`} target="_blank" rel="noopener noreferrer">
                          LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                    {profile.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://${profile.links.github}`} target="_blank" rel="noopener noreferrer">
                          GitHub <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-col gap-4 justify-center">
                  <Button>Contact</Button>
                  <Button variant="outline">Share Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tasks Completed</span>
                    <span className="font-bold">{profile.stats.tasksCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Score</span>
                    <Badge variant="secondary">{profile.stats.avgScore}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Earned</span>
                    <span className="font-bold text-green-600">{profile.stats.totalEarned}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Ranking</span>
                    <span className="flex items-center gap-1 font-medium">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      Top {profile.stats.topPercentile}%
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.badges.map((badge) => (
                    <div key={badge.name} className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                        <Award className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{badge.name}</p>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Verified Work */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Verified Work Portfolio</CardTitle>
                  <CardDescription>
                    Real work completed for real companies, evaluated by AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {profile.completedTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{task.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Avatar className="h-5 w-5">
                              <AvatarFallback className="text-xs">{task.company[0]}</AvatarFallback>
                            </Avatar>
                            {task.company}
                            <span>-</span>
                            {task.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="font-bold">{task.score}</span>
                            <span className="text-muted-foreground">/100</span>
                          </div>
                          <Badge 
                            variant="secondary"
                            className={
                              task.score >= 90 ? "bg-green-100 text-green-700" :
                              task.score >= 80 ? "bg-blue-100 text-blue-700" :
                              "bg-amber-100 text-amber-700"
                            }
                          >
                            {task.score >= 90 ? "Excellent" : task.score >= 80 ? "Good" : "Satisfactory"}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {task.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>

                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground italic">"{task.feedback}"</p>
                        <p className="text-xs text-muted-foreground mt-1">- Employer Feedback</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <Badge variant="secondary" className="gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Blockchain Verified
                        </Badge>
                        <Button variant="ghost" size="sm" className="gap-1">
                          View Details <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
