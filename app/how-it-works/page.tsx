import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, BrainCircuit, Code2, Trophy } from "lucide-react"

export default function HowItWorksPage() {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-24 space-y-24">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    The new way to get hired.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    No more resume black holes. Prove your skills with real work and get hired by companies who care about what you can do.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    {
                        icon: Search,
                        title: "1. Analyze",
                        desc: "We scan job descriptions to extract the real skills and 'cultural signals' companies are looking for."
                    },
                    {
                        icon: BrainCircuit,
                        title: "2. Smart Match",
                        desc: "Our AI matches you based on your verified skills, not just keywords on a resume."
                    },
                    {
                        icon: Code2,
                        title: "3. The Work",
                        desc: "Complete paid micro-tasks to prove your competence. Build real features for real bounties."
                    },
                    {
                        icon: Trophy,
                        title: "4. Get Hired",
                        desc: "Earn verified badges and get fast-tracked to interviews. Your work is your portfolio."
                    }
                ].map((step, i) => (
                    <Card key={i} className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="pt-6 space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </CardContent>
                        <div className="absolute -right-4 -bottom-4 text-[10rem] font-bold text-muted/5 select-none z-0">
                            {i + 1}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="bg-muted/30 rounded-3xl p-8 md:p-16 text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to prove your skills?</h2>
                <Link href="/tasks">
                    <Button size="lg" className="text-lg px-8">Browse Tasks</Button>
                </Link>
            </div>
        </div>
    )
}
