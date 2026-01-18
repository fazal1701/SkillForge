"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MOCK_MATCHES, getCandidateById } from "@/lib/mock-data"
import { CheckCircle2, XCircle, User as UserIcon, Briefcase, Award } from "lucide-react"
import { motion } from "framer-motion"

export function SmartMatchList() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30 uppercase tracking-widest text-[10px] font-bold">Matches Detected</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Verified Smart Matches
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Our AI matches verified skill proof against real job requirements.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_MATCHES.map((match, i) => {
                        const candidate = getCandidateById(match.candidateId)
                        if (!candidate) return null

                        return (
                            <motion.div
                                key={match.candidateId}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl">
                                    <CardContent className="p-0 flex flex-col h-full">
                                        <div className="p-6 space-y-4 flex-1">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden border-2 border-background group-hover:border-primary/20 transition-colors">
                                                        <UserIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{candidate.name}</h3>
                                                        <p className="text-sm text-muted-foreground font-medium">{candidate.title}</p>
                                                    </div>
                                                </div>
                                                <div className="relative h-14 w-14">
                                                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="3" />
                                                        <motion.circle
                                                            cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3"
                                                            strokeDasharray="100 100"
                                                            initial={{ strokeDashoffset: 100 }}
                                                            whileInView={{ strokeDashoffset: 100 - match.matchScore }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-black">
                                                        {match.matchScore}%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3 pt-2">
                                                {match.matchReasons.map((reason, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.8 + (idx * 0.1) }}
                                                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                                                    >
                                                        {reason.isPositive ? (
                                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                                        ) : (
                                                            <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                                                        )}
                                                        <span className={reason.isPositive ? "text-foreground" : "text-muted-foreground"}>
                                                            {reason.description}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="px-6 py-4 bg-muted/30 border-t flex items-center justify-between mt-auto">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="h-6 w-6 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[8px] font-bold">
                                                        {i === 1 ? <Briefcase className="h-3 w-3" /> : i === 2 ? <Award className="h-3 w-3" /> : "SR"}
                                                    </div>
                                                ))}
                                            </div>
                                            <Badge variant="secondary" className="bg-background text-[10px] font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                                VIEW PORTFOLIO
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
