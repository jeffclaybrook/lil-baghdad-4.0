"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Chevron } from "@/components/icons"

export default function Item() {
 const searchParams = useSearchParams()
 const title = searchParams.get("title")!
 const description = searchParams.get("description")!
 const category = searchParams.get("category")!
 const price = searchParams.get("price")!
 const image = searchParams.get("image")!
 
 return (
  <>
   <nav className="p-4">
    <Link href={"/"}>
     <Chevron />
    </Link>
   </nav>
   <section className="grid lg:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto px-4 pt-10">
    <Image
     src={image}
     alt={title}
     width={600}
     height={250}
     priority
     className="rounded-xl aspect-video"
    />
    <div className="flex flex-col max-w-[600px]">
     <h5 className="uppercase text-[#76c7cd] mb-2">{category}</h5>
     <h3 className="text-3xl font-medium mb-2 text-slate-50">{title}</h3>
     <p className="mb-2">{description}</p>
     <h4 className="text-xl font-normal text-slate-400 mb-4">{price}</h4>
     <a
      href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline rounded-full"
     >
      Order Online
     </a>
    </div>
   </section>
  </>
 )
}