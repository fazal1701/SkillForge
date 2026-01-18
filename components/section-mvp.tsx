import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function SectionMVP() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-2xl">
                        <Image
                            src="/images/mvp-visual.png"
                            alt="SkillForge MVP Dashboard"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            SkillForge MVP
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Validate work-first hiring as the future of early-career recruiting.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p><strong>Work predicts performance</strong> better than résumés.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p><strong>Hiring cycles shorten</strong> dramatically from months to days.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                <p>Strong <strong>repeat usage</strong> from early employer partners.</p>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Link href="#">
                                <Button size="lg" className="gap-2">
                                    View Live MVP <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
