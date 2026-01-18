"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingUp, Users, Target, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function ForEmployersPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-black text-white text-center px-4 overflow-hidden">
                <div className="container max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
                            Hire talent that <span className="text-green-400">actually ships.</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Stop filtering 1,000 resumes. Post a bounty, review real code, and hire the top 1% of contributors.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-4 flex justify-center gap-4"
                    >
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-12">Post a Task</Button>
                        <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full h-12">Book Demo</Button>
                    </motion.div>
                </div>
            </section>

            {/* Benefits & Mockup */}
            <section className="py-24 container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Why SkillForge?</h2>
                    <ul className="space-y-6">
                        {[
                            { title: "Verify skills before the interview", desc: "See actual code submissions for your specific stack." },
                            { title: "Get actual work done while hiring", desc: "Bounties are real Jira tickets completed by candidates." },
                            { title: "Reduce time-to-hire by 60%", desc: "Skip the initial vetting calls and take-home tests." },
                            { title: "Eliminate bias with code-first vetting", desc: "Evaluate purely on submission quality and AI score." }
                        ].map((benefit, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="mt-1 h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl opacity-50" />
                    <Card className="relative overflow-hidden border bg-background/50 backdrop-blur-sm shadow-2xl">
                        <CardHeader className="border-b bg-muted/30 p-4 flex flex-row items-center justify-between space-y-0">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                                <span className="ml-2 text-xs font-mono text-muted-foreground">employer-dashboard.skillforge.ai</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="flex h-[450px]">
                                <aside className="w-48 border-r bg-muted/20 p-4 space-y-4 hidden sm:block">
                                    <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                                    <div className="space-y-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`h-8 rounded w-full ${i === 1 ? 'bg-primary/10' : 'bg-muted/50'}`} />
                                        ))}
                                    </div>
                                </aside>
                                <main className="flex-1 p-6 space-y-6 overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-xl">Active Bounties</h3>
                                            <div className="h-2 w-32 bg-muted rounded" />
                                        </div>
                                        <Badge variant="outline" className="text-green-500 font-mono">LIVE</Badge>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Card className="p-4 bg-muted/30 border-none shadow-none">
                                            <p className="text-xs text-muted-foreground">Total Applicants</p>
                                            <p className="text-2xl font-bold">1,204</p>
                                        </Card>
                                        <Card className="p-4 bg-muted/30 border-none shadow-none">
                                            <p className="text-xs text-muted-foreground">High Matches</p>
                                            <p className="text-2xl font-bold text-primary">82</p>
                                        </Card>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { name: "Frontend Engineer (React)", score: 98, status: "Verified" },
                                            { name: "Backend Architect (Go)", score: 94, status: "Verified" },
                                            { name: "UI Designer", score: 89, status: "Pending" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 rounded-lg border bg-background group hover:border-primary/50 transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-muted shrink-0" />
                                                <div className="flex-1 text-sm font-medium">{item.name}</div>
                                                <div className="text-green-500 font-bold font-mono">{item.score}%</div>
                                                <CheckCircle2 className="h-4 w-4 text-green-500 opacity-50" />
                                            </div>
                                        ))}
                                    </div>
                                </main>
                            </div>
                        </CardContent>
                    </Card>
                    {/* Floating HUD elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 bg-white dark:bg-zinc-900 border p-4 rounded-xl shadow-xl hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Vetting AI</p>
                                <p className="text-sm font-bold">100% Secure</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}
