"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function SectionMVP() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-2xl border bg-muted shadow-2xl group"
                    >
                        <Image
                            src="/images/mvp-visual.png"
                            alt="SkillForge MVP Dashboard"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                SkillForge MVP
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Validating work-first hiring as the future of early-career recruiting.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { text: "Work predicts performance better than résumés.", strong: "Work predicts performance" },
                                { text: "Hiring cycles shorten dramatically from months to days.", strong: "Hiring cycles shorten" },
                                { text: "Strong repeat usage from early employer partners.", strong: "repeat usage" }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 transition-transform group-hover:scale-110" />
                                    <p>
                                        <strong className="text-foreground">{item.strong}</strong> {item.text.replace(item.strong, "")}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-4"
                        >
                            <Link href="#">
                                <Button size="lg" className="gap-2 rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all">
                                    View Live MVP <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
