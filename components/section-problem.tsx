"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function SectionProblem() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                            Hiring Signals Are <span className="text-destructive">Broken</span>
                        </h2>
                        <Card className="border-l-4 border-l-destructive shadow-lg overflow-hidden">
                            <CardContent className="p-6 space-y-4 text-muted-foreground relative">
                                <div className="absolute top-0 right-0 h-full w-1 bg-destructive/10" />
                                <ul className="space-y-4 list-disc pl-5 text-base sm:text-lg">
                                    <li>
                                        <strong className="text-foreground">Résumés are inflated</strong> or AI-generated, making them unreliable.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Interviews poorly predict</strong> actual job performance.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Hiring junior talent</strong> is slow, expensive, and risky.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <p className="text-xl font-medium text-foreground">
                            Bottom line: There is no trusted signal of real capability.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-square lg:aspect-auto lg:h-[400px] overflow-hidden rounded-xl border bg-muted shadow-xl"
                    >
                        <Image
                            src="/images/problem-visual.png"
                            alt="Visualization of broken hiring signals"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
