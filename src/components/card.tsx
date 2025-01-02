import Link from "next/link"
import Image from "next/image"

interface CardProps {
 title: string
 description: string
 category: string
 price: string
 image: string
 href: string
}

export default function Card({ title, description, category, price, image, href }: CardProps) {
 return (
  <Link href={{
   pathname: `${href}`,
   query: {
    title: title,
    description: description,
    category: category,
    image: image,
    price: price
   }
  }} className="flex flex-col gap-4 border border-slate-600 p-4 rounded-xl hover:bg-slate-800 duration-100">
   <Image
    src={image}
    alt={title}
    width={750}
    height={200}
    className="rounded-xl aspect-video"
   />
   <div className="flex flex-col">
    <h3 className="text-xl font-medium mb-2 text-slate-50">{title}</h3>
    <h4 className="text-xl font-normal text-slate-400">{price}</h4>
   </div>
  </Link>
 )
}