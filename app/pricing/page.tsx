import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-bold">Simple pricing for serious hiring</h1>
        <p className="text-xl text-muted-foreground">Free for candidates. Fair for companies.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Perfect for startups</CardDescription>
            <div className="pt-4">
              <span className="text-4xl font-bold">$299</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            {["3 Active Tasks", "Unlimited Candidates", "Basic Analytics", "Email Support"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" /> {f}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Start Free Trial</Button>
          </CardFooter>
        </Card>

        {/* Scale */}
        <Card className="flex flex-col border-primary shadow-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-bold">
            MOST POPULAR
          </div>
          <CardHeader>
            <CardTitle>Scale</CardTitle>
            <CardDescription>For growing teams</CardDescription>
            <div className="pt-4">
              <span className="text-4xl font-bold">$799</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            {["10 Active Tasks", "Advanced AI Matching", "Team Collaboration", "Priority Support", "Slack Integration"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" /> {f}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Enterprise */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Custom volume & security</CardDescription>
            <div className="pt-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-3">
            {["Unlimited Tasks", "Dedicated Success Manager", "Custom SSO & Security", "API Access", "White-labeling"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" /> {f}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
