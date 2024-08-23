import Image from "next/image"

interface ItemProps {
 title: string
 href: string
 category: string
 image: string
 description: string
 price: string
}

interface Props {
 item: ItemProps
}

export default function Item({ item }: Props) {
 return (
  <section className="flex flex-wrap gap-10 max-w-[1000px] mx-auto px-4 py-10" id={item?.href}>
   <Image
    src={item?.image}
    alt={item?.title}
    width={500}
    height={250}
    className="object-cover rounded-lg flex-1"
   />
   <div className="flex flex-col flex-1">
    <h5 className="uppercase mb-4">{item?.category}</h5>
    <h3 className="text-2xl mb-4">{item?.title}</h3>
    <p className="mb-4">{item?.description}</p>
    <h4 className="text-xl mb-4">{item?.price}</h4>
    <a
     href="https://lil-baghdad.square.site/s/order?location=11ecbc4e2927f6a69d9aac1f6bbbcc9c&customer_seat_id=11ef0e78f85e40fa879a7a73c86d77ee#most-popular"
     target="_blank"
     rel="noreferrer"
     className="btn btn-outline rounded-full w-[300px]"
    >
     Order Online
    </a>
   </div>
  </section>
 )
}