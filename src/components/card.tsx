import Link from "next/link"
import Image from "next/image"

interface CardProps {
 image: string
 title: string
 price: string
 href: string
}

export default function Card({ image, title, price, href }: CardProps) {
 return (
  <Link href={href} className="flex flex-col gap-4 grow basis-96 lg:max-w-[476px] border border-slate-500 p-4 rounded-xl hover:bg-gray-800 duration-100">
   <div className="flex items-center justify-center rounded-full">
    <Image
     src={image}
     alt={title}
     width={749}
     height={200}
     className="rounded-xl aspect-video"
    />
   </div>
   <div className="flex flex-col">
    <h3 className="text-xl font-medium mb-2 text-slate-50">{title}</h3>
    <h4 className="text-xl font-normal text-slate-400">{price}</h4>
   </div>
  </Link>
 )
}