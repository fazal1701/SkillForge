"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function SectionInnovation() {
    return (
        <section className="py-24 bg-muted/40 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -ml-32 -mb-32" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Work Becomes the Credential
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        SkillForge replaces claims with proof.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border shadow-2xl bg-black mb-12 ring-2 ring-primary/5"
                >
                    <Image
                        src="/images/innovation-flow.png"
                        alt="SkillForge Flow: Task to Hire"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { icon: "💼", title: "Real Tasks", desc: "Candidates complete paid, real-world work, not quizzes." },
                        { icon: "🤖", title: "AI Evaluation", desc: "Quality and outcomes are instantly analyzed and scored." },
                        { icon: "🏆", title: "Verified Portfolio", desc: "Portfolios built from verified work proven on the platform." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center space-y-3 p-8 rounded-2xl bg-background shadow-md border hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="text-5xl mb-2">{feature.icon}</div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
