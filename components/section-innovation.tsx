import Image from "next/image"

export function SectionInnovation() {
    return (
        <section className="py-24 bg-muted/40">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Work Becomes the Credential
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        SkillForge replaces claims with proof.
                    </p>
                </div>

                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl border shadow-2xl bg-black mb-12">
                    <Image
                        src="/images/innovation-flow.png"
                        alt="SkillForge Flow: Task to Hire"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
                        <div className="text-4xl">💼</div>
                        <h3 className="text-xl font-bold">Real Tasks</h3>
                        <p className="text-sm text-muted-foreground">Candidates complete paid, real-world work, not quizzes.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
                        <div className="text-4xl">🤖</div>
                        <h3 className="text-xl font-bold">AI Evaluation</h3>
                        <p className="text-sm text-muted-foreground">Quality and outcomes are instantly analyzed and scored.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
                        <div className="text-4xl">🏆</div>
                        <h3 className="text-xl font-bold">Verified Portfolio</h3>
                        <p className="text-sm text-muted-foreground">Portfolios built from verified work proven on the platform.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
