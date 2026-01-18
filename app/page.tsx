"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SectionProblem } from "@/components/section-problem"
import { SectionInnovation } from "@/components/section-innovation"
import { SectionMVP } from "@/components/section-mvp"
import { SectionShowcase } from "@/components/section-showcase"
import { JobAnalyzer } from "@/components/job-analyzer"
import { SmartMatchList } from "@/components/smart-match-list"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-8"
              >
                <Sparkles className="h-4 w-4" />
                <span>Innovating the Early-Career Workflow</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              >
                The new standard of early-career hiring.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-pretty text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
              >
                Companies evaluate talent through real work. Candidates earn while building verified portfolios.
                AI scores submissions instantly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 text-base gap-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full gap-2 backdrop-blur-sm">
                    See How It Works
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionProblem />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <JobAnalyzer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SmartMatchList />
        </motion.div>

        <SectionInnovation />
        <SectionShowcase />
        <SectionMVP />

        {/* Final CTA */}
        <section className="bg-foreground text-background py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to change how you hire?
              </h2>
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full h-12 px-8">
                  Get Started Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

