"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, BrainCircuit, Code2, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorksPage() {
    const steps = [
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
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="container max-w-5xl mx-auto px-4 py-24 space-y-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                    The new way to get hired.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    No more resume black holes. Prove your skills with real work and get hired by companies who care about what you can do.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8"
            >
                {steps.map((step, i) => (
                    <motion.div key={i} variants={item}>
                        <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                            <CardContent className="pt-6 space-y-4 relative z-10 bg-background/50 backdrop-blur-sm h-full flex flex-col">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                                >
                                    <step.icon className="h-6 w-6" />
                                </motion.div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                                    {step.desc}
                                </p>
                            </CardContent>
                            <div className="absolute -right-4 -bottom-4 text-[10rem] font-bold text-muted/5 select-none z-0 group-hover:text-primary/10 transition-colors duration-500">
                                {i + 1}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted/30 rounded-3xl p-8 md:p-16 text-center space-y-6 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
                <h2 className="text-3xl font-bold relative z-10">Ready to prove your skills?</h2>
                <div className="relative z-10">
                    <Link href="/tasks">
                        <Button size="lg" className="text-lg px-8 rounded-full h-12 shadow-lg hover:shadow-xl transition-all">Browse Tasks</Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
