"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Check, Zap, Building2, Rocket, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const candidatePlans = [
  {
    name: "Free",
    description: "Get started with SkillForge",
    price: "$0",
    period: "forever",
    features: [
      "Access to all public tasks",
      "Basic AI feedback on submissions",
      "Public portfolio page",
      "Up to 3 active applications",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious job seekers",
    price: "$19",
    period: "per month",
    features: [
      "Everything in Free",
      "Unlimited active applications",
      "Advanced AI feedback & coaching",
      "Priority task matching",
      "Portfolio analytics",
      "Direct messaging with employers",
      "Resume builder integration",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Premium",
    description: "Maximum career acceleration",
    price: "$49",
    period: "per month",
    features: [
      "Everything in Pro",
      "1-on-1 career coaching session/month",
      "Early access to premium tasks",
      "Featured portfolio placement",
      "Interview preparation tools",
      "Salary negotiation guides",
      "Dedicated support",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const employerPlans = [
  {
    name: "Starter",
    description: "Test the platform",
    price: "$499",
    period: "per month",
    features: [
      "Up to 3 active tasks",
      "Basic AI evaluation",
      "Access to candidate pool",
      "Standard support",
      "Basic analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams",
    price: "$1,499",
    period: "per month",
    features: [
      "Up to 15 active tasks",
      "Advanced AI evaluation",
      "Priority candidate matching",
      "Custom task templates",
      "Team collaboration (5 seats)",
      "Advanced analytics & reporting",
      "Priority support",
    ],
    cta: "Start Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited active tasks",
      "Custom AI evaluation criteria",
      "Dedicated talent pool",
      "White-label options",
      "Unlimited team seats",
      "API access",
      "Custom integrations (ATS, HRIS)",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does SkillForge work for candidates?",
    answer: "Candidates browse and apply to real paid tasks posted by companies. Once accepted, you complete the task within the deadline. Your work is evaluated by our AI system, and you get paid for approved submissions. Completed work becomes part of your verified portfolio.",
  },
  {
    question: "How much can candidates earn per task?",
    answer: "Task payments range from $150 for smaller tasks to $2,000+ for complex projects. The average task pays between $300-$500. You keep 90% of the payment, with 10% going to platform fees.",
  },
  {
    question: "What types of tasks can employers post?",
    answer: "Employers can post any project-based task including data analysis, content writing, design work, coding challenges, marketing campaigns, financial modeling, and more. Tasks should be completable within 1-2 weeks.",
  },
  {
    question: "How does the AI evaluation work?",
    answer: "Our AI evaluates submissions across multiple dimensions including technical accuracy, creativity, communication, and attention to detail. Employers can customize evaluation criteria. All AI scores are transparent and candidates receive detailed feedback.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period. For annual plans, we offer prorated refunds for the unused portion.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes! We offer 50% off for verified startups (under 50 employees) and registered nonprofits. Contact our sales team with documentation to apply for the discount.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Tabs */}
          <Tabs defaultValue="candidates" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="candidates" className="gap-2">
                <Zap className="h-4 w-4" />
                For Candidates
              </TabsTrigger>
              <TabsTrigger value="employers" className="gap-2">
                <Building2 className="h-4 w-4" />
                For Employers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="candidates">
              <div className="grid md:grid-cols-3 gap-6">
                {candidatePlans.map((plan) => (
                  <Card 
                    key={plan.name} 
                    className={`relative ${plan.popular ? "border-foreground shadow-lg" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-foreground text-background">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/signup">{plan.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="employers">
              <div className="grid md:grid-cols-3 gap-6">
                {employerPlans.map((plan) => (
                  <Card 
                    key={plan.name} 
                    className={`relative ${plan.popular ? "border-foreground shadow-lg" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-foreground text-background">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                          {plan.cta}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Features Comparison */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All plans include</h2>
              <p className="text-muted-foreground">Core features available on every plan</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "AI Evaluation", desc: "Instant feedback on work" },
                { icon: Building2, title: "Verified Work", desc: "Blockchain-backed portfolio" },
                { icon: Rocket, title: "Real Companies", desc: "Fortune 500 & startups" },
                { icon: HelpCircle, title: "Support", desc: "Help when you need it" },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 bg-muted rounded-lg mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-muted-foreground">Everything you need to know about SkillForge</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <Card className="max-w-2xl mx-auto bg-foreground text-background">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-background/80 mb-8 max-w-md mx-auto">
                  Join thousands of candidates and companies already using SkillForge to transform hiring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/signup">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-background/20 text-background hover:bg-background/10" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
