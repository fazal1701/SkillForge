import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SectionProblem } from "@/components/section-problem"
import { SectionInnovation } from "@/components/section-innovation"
import { SectionMVP } from "@/components/section-mvp"
import { SectionShowcase } from "@/components/section-showcase"
import {
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                The new standard of early-career hiring.
              </h1>
              <p className="mt-8 text-pretty text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                Companies evaluate talent through real work. Candidates earn while building verified portfolios.
                AI scores submissions instantly.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 text-base gap-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full gap-2">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionProblem />
        <SectionInnovation />
        <SectionShowcase />
        <SectionMVP />

        {/* Final CTA */}
        <section className="bg-foreground text-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to change how you hire?
            </h2>
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="gap-2 rounded-full h-12 px-8">
                Get Started Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

