import { ReactNode } from "react"

interface SectionProps {
 title: string
 children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
 return (
  <section className="max-w-[1000px] mx-auto px-4">
   <h2 className="text-3xl mb-4">{title}</h2>
   <div className="grid md:grid-cols-2 gap-4">{children}</div>
  </section>
 )
}