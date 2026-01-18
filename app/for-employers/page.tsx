import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ForEmployersPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-black text-white text-center px-4">
                <div className="container max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
                        Hire talent that <span className="text-green-400">actually ships.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stop filtering 1,000 resumes. Post a bounty, review real code, and hire the top 1% of contributors.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200">Post a Task</Button>
                        <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">Book Demo</Button>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Why SkillForge?</h2>
                    <ul className="space-y-4">
                        {[
                            "Verify skills before the interview",
                            "Get actual work done while hiring",
                            "Reduce time-to-hire by 60%",
                            "Eliminate bias with code-first vetting"
                        ].map(benefit => (
                            <li key={benefit} className="flex items-center gap-3 text-lg">
                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-muted rounded-xl h-[400px] flex items-center justify-center border font-mono text-muted-foreground">
                    [Dashboard Interface Mockup]
                </div>
            </section>
        </div>
    )
}
