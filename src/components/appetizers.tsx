import Card from "./card"
import Section from "./section"
import Separator from "./separator"
import { appetizers } from "@/constants"

export default function Appetizers() {
 return (
  <Section title="Appetizers" id="appetizers">
   {appetizers.map((item) => (
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