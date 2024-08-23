import Link from "next/link"
import Image from "next/image"
import Chevron from "@/components/icons/chevron"
import { drinks } from "@/constants"

export default function Page({ params }: { params: { item: number } }) {
 const item = drinks[params.item]
 return (
  <>
   <nav className="flex items-center justify-start p-4">
    <Link href={"/#drinks"} className="btn btn-circle btn-ghost">
     <Chevron />
    </Link>
   </nav>
   <section className="max-w-[1000px] mx-auto px-4 py-10 flex flex-wrap gap-10">
    <div className="flex flex-col gap-4 grow basis-96 lg:max-w-[476px] rounded-xl">
     <Image
      src={item.image}
      alt={item.title}
      width={600}
      height={250}
      className="mx-auto rounded-xl aspect-video"
     />
    </div>
    <div className="flex flex-col max-w-[476px] basis-96 grow mx-auto">
     <h5 className="uppercase text-[#76c7cd] mb-4">{item.category}</h5>
     <h3 className="text-3xl font-medium mb-2 text-slate-50">{item.title}</h3>
     <p className="mb-4">{item.description}</p>
     <h4 className="text-xl font-normal text-slate-400 mb-4">{item.price}</h4>
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