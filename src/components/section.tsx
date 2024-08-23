import { ReactNode } from "react"

interface SectionProps {
 title?: string
 id?: string
 children: ReactNode
}

export default function Section({ title, id, children }: SectionProps) {
 return (
  <section className="max-w-[1000px] mx-auto px-4" id={id}>
   {title && <h2 className="text-3xl mb-4">{title}</h2>}
   <div className="flex flex-wrap gap-4">
    {children}
   </div>
  </section>
 )
}