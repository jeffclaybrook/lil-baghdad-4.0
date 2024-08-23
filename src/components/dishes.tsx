import Card from "./card"
import Section from "./section"
import Separator from "./separator"
import { dishes } from "@/constants"

export default function Dishes() {
 return (
  <Section title="Dishes" id="dishes">
   {dishes.map((item) => (
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