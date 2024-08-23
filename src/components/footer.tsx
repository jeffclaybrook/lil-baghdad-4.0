import Link from "next/link"
import Image from "next/image"
import Facebook from "./icons/facebook"
import Instagram from "./icons/instagram"
import Google from "./icons/google"
import Phone from "./icons/phone"

const links = [
 { href: "https://www.facebook.com/profile.php?id=100074970285412/", icon: <Facebook /> },
 { href: "https://www.instagram.com/desireddishes/", icon: <Instagram /> },
 { href: "https://goo.gl/maps/DjnmrwDQn6bWSLAj9", icon: <Google /> },
 { href: "tel:(512)-831-8122", icon: <Phone /> }
]

export default function Footer() {
 return (
  <footer className="flex flex-col items-center justify-center gap-6 py-12 mt-24 px-4 border-t border-slate-500">
   <Link href="/">
    <Image
     src="/logo.png"
     alt="Lil Baghdad"
     width={140}
     height={140}
     className="rounded-full object-cover"
    />
   </Link>
   <ul className="flex items-center justify-center gap-5">
    {links.map((item, i) => (
     <li key={i}>
      <a
       href={item.href}
       target="_blank"
       rel="noreferrer"
       className="btn btn-circle btn-outline"
      >
       {item.icon}
      </a>
     </li>
    ))}
   </ul>
   <a
    href="https://goo.gl/maps/DjnmrwDQn6bWSLAj9"
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center"
   >
    <span>Taste of Cove, 105 W Avenue A</span>
    <span>Copperas Cove, TX 76522</span>
   </a>
  </footer>
 )
}