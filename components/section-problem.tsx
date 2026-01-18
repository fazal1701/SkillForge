import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function SectionProblem() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Hiring Signals Are <span className="text-destructive">Broken</span>
                        </h2>
                        <Card className="border-l-4 border-l-destructive shadow-lg">
                            <CardContent className="p-6 space-y-4 text-muted-foreground">
                                <ul className="space-y-4 list-disc pl-5">
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
                    </div>
                    <div className="relative aspect-square lg:aspect-auto lg:h-[400px] overflow-hidden rounded-xl border bg-muted shadow-xl">
                        <Image
                            src="/images/problem-visual.png"
                            alt="Visualization of broken hiring signals"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
