import Card from "./card"
import Section from "./section"
import Separator from "./separator"
import { curry } from "@/constants"

export default function Curry() {
 return (
  <Section title="Curry" id="curry">
   {curry.map((item) => (
    <Card
     key={item.id}
     image={item.image}
     title={item.title}
     price={item.price}
     href={item.href}
    />
   ))}
   <Separator />
  </Section>
 )
}