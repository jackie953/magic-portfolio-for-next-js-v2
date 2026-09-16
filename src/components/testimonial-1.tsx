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
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-3", className)}>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border border-border p-8">
          <CardContent className="p-0">
            <p className="text-foreground text-base">{testimonial.content}</p>
            <p className="text-muted-foreground mt-4 text-sm">{testimonial.attribution}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Testimonial1
