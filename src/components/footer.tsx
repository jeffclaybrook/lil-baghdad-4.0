import Link from "next/link"
import Image from "next/image"
import { LINKS } from "@/lib/data"

export default function Footer() {
 return (
  <footer className="flex flex-col items-center justify-center gap-6 py-12 mt-24 px-4 border-t border-slate-500">
   <Link href={"/"}>
    <Image
     src="/logo.png"
     alt="Lil Baghdad"
     width={140}
     height={140}
     className="rounded-full object-cover"
    />
   </Link>
   <ul className="flex items-center justify-center gap-5">
    {LINKS.map((link, i) => (
     <li key={i}>
      <a
       href={link.href}
       target="_blank"
       rel="noreferrer"
       className="btn btn-circle btn-outline"
      >
       <link.icon />
      </a>
     </li>
    ))}
   </ul>
   <a
    href="https://goo.gl/maps/DjnmrwDQn6bWSLAj9"
    target="_blank"
    rel="noreferrer"
    className="text-center hover:underline"
   >
    Taste of Cove, 105 W Avenue A <br />
    Copperas Cove, TX 76522
   </a>
  </footer>
 )
}