import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_PORTFOLIO_ITEMS } from "@/lib/mock-data"

export function SectionShowcase() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Real Work. Verified Skills.
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        See what candidates are building on SkillForge.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_PORTFOLIO_ITEMS.map((item) => (
                        <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                                <p className="line-clamp-2 mb-3">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map(skill => (
                                        <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 border-t bg-muted/10 flex justify-between items-center text-xs text-muted-foreground">
                                <span>Verified by <strong>{item.verifiedBy}</strong></span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
