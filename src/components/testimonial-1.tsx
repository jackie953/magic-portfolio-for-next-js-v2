import type { Testimonial } from "@/components/testimonial-1-data"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonial1({
  className,
  testimonials,
}: {
  className?: string
  testimonials: Testimonial[]
}) {
  return (
    <div className={cn("grid grid-cols-1 items-start gap-8 md:grid-cols-3", className)}>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="h-full border border-border p-6">
          <CardContent className="flex h-full flex-col justify-between gap-4 p-0">
            <p className="font-body text-sm text-[var(--neutral-on-background-strong)]">
              {testimonial.content}
            </p>
            <p className="text-muted-foreground text-sm">{testimonial.attribution}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Testimonial1
