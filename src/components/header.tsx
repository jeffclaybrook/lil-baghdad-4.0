import Image from "next/image"
import { Doordash, Scroll, UberEats } from "./icons"

export default function Header() {
 return (
  <header className="flex flex-col items-center justify-center px-3 pb-16 min-h-screen">
   <figure className="flex flex-col items-center justify-center gap-4 mt-auto mb-10">
    <Image
     src="/logo.png"
     alt="Lil Baghdad"
     width={160}
     height={160}
     className="rounded-full object-cover mb-4"
    />
    <figcaption className="text-[#d57c4a] uppercase font-light text-xl">
     <strong className="font-semibold">Iraqi</strong> made,{" "}
     <strong className="font-semibold">Texas</strong> inspired
    </figcaption>
   </figure>
   <div className="flex flex-col gap-4 max-w-[300px] mb-auto">
    <a
     href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full w-[300px]"
    >
     Order Online
    </a>
    <a
     href="https://www.doordash.com/store/lil-baghdad-copperas-cove-23416610/?pickup=true&utm_campaign=gpa"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full w-[300px]"
    >
     <Doordash />
    </a>
    <a
     href="https://www.ubereats.com/store/lil-baghdad/ugkEkaVyX0eNfA6ezGU0eA"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full w-[300px]"
    >
     <UberEats />
    </a>
   </div>
   <div className="flex flex-col items-center">
    <Scroll />
    <p>Scroll to see menu</p>
   </div>
  </header>
 )
}