"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_JOB_ANALYSIS } from "@/lib/mock-data"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Sparkles, BrainCircuit, Target } from "lucide-react"

export function JobAnalyzer() {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const handleAnalyze = () => {
        setIsAnalyzing(true)
        setTimeout(() => {
            setIsAnalyzing(false)
            setShowResult(true)
        }, 2000)
    }

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-2xl bg-primary/10 text-primary mb-2 shadow-inner"
                    >
                        <BrainCircuit className="h-8 w-8" />
                    </motion.div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        AI Job Analysis
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Paste a job description and let SkillForge extract the real requirements.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-2 focus-within:border-primary/50 transition-colors shadow-lg bg-background/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Search className="h-5 w-5 text-primary" />
                                    Job Description
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="relative group">
                                    <textarea
                                        className="w-full min-h-[300px] p-4 rounded-xl bg-muted/30 border-none focus:ring-2 focus:ring-primary/20 resize-none font-sans text-sm leading-relaxed transition-all"
                                        placeholder="Paste full job description here..."
                                        defaultValue={MOCK_JOB_ANALYSIS.jobDescriptionSnippet}
                                    />
                                    <AnimatePresence>
                                        {isAnalyzing && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-xl flex flex-col items-center justify-center space-y-6 z-20"
                                            >
                                                <div className="relative">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="absolute inset-0 flex items-center justify-center"
                                                    >
                                                        <Sparkles className="h-6 w-6 text-primary" />
                                                    </motion.div>
                                                </div>
                                                <div className="space-y-1 text-center">
                                                    <p className="font-bold text-lg tracking-tight">AI at work...</p>
                                                    <p className="text-sm text-muted-foreground">Extracting core skills & cultural signals</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <Button
                                    className="w-full h-12 rounded-full text-base font-semibold shadow-lg hover:shadow-primary/20 transition-all group overflow-hidden relative"
                                    onClick={handleAnalyze}
                                    disabled={isAnalyzing}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isAnalyzing ? "Analyzing Requirements..." : "Analyze Description"}
                                        {!isAnalyzing && <Sparkles className="h-4 w-4" />}
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="button-bg"
                                    />
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-2 bg-gradient-to-br from-background via-background to-primary/5 shadow-xl overflow-hidden relative flex flex-col">
                            <AnimatePresence mode="wait">
                                {!showResult ? (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex-1 flex flex-col items-center justify-center p-12 text-center"
                                    >
                                        <div className="relative mb-8 group">
                                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <Image
                                                    src="/images/ai-scan-visual.png"
                                                    alt="AI Scan Visual"
                                                    width={240}
                                                    height={240}
                                                    className="relative z-10 opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500"
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <p className="text-xl font-semibold opacity-50 tracking-tight">Intelligence Output</p>
                                            <p className="text-muted-foreground max-w-[240px]">Analysis results will be streamed here in real-time</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-8 space-y-8 flex-1 overflow-auto"
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-lg flex items-center gap-2">
                                                    <Sparkles className="h-5 w-5 text-primary" />
                                                    Extracted Skills
                                                </h3>
                                                <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase">Verified Match</Badge>
                                            </div>
                                            <div className="flex flex-wrap gap-2.5">
                                                {MOCK_JOB_ANALYSIS.extractedSkills.map((skill, i) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <Badge
                                                            variant={skill.importance === "HIGH" ? "default" : "secondary"}
                                                            className={`px-3.5 py-1.5 text-sm ${skill.importance === "HIGH" ? "shadow-md bg-primary hover:bg-primary/90" : "bg-muted/50"}`}
                                                        >
                                                            {skill.name}
                                                            {skill.importance === "HIGH" && <Sparkles className="h-3 w-3 ml-1.5 inline-block" />}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="p-5 rounded-2xl bg-background border border-border/50 shadow-sm group hover:border-primary/30 transition-colors"
                                            >
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-2">Detected Level</p>
                                                <p className="text-2xl font-black tracking-tight">{MOCK_JOB_ANALYSIS.detectedLevel}</p>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="p-5 rounded-2xl bg-background border border-border/50 shadow-sm group hover:border-primary/30 transition-colors"
                                            >
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-2">Estimated Range</p>
                                                <p className="text-2xl font-black tracking-tight">{MOCK_JOB_ANALYSIS.estimatedSalaryRange}</p>
                                            </motion.div>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <h3 className="font-bold text-lg flex items-center gap-2">
                                                <Target className="h-5 w-5 text-primary" />
                                                Cultural Signals
                                            </h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {MOCK_JOB_ANALYSIS.culturalSignals.map((signal, i) => (
                                                    <motion.div
                                                        key={signal}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.6 + (i * 0.1) }}
                                                        className="flex items-center gap-3 text-sm font-medium text-foreground bg-background/50 backdrop-blur-sm p-3 rounded-xl border border-border/30 hover:shadow-md transition-all duration-300"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                        {signal}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
