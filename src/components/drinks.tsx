import Card from "./card"
import Section from "./section"
import { drinks } from "@/constants"

export default function Drinks() {
 return (
  <Section title="Drinks" id="drinks">
   {drinks.map((item) => (
    <Card
     key={item.id}
     image={item.image}
     title={item.title}
     price={item.price}
     href={item.href}
    />
   ))}
  </Section>
 )
}