import Card from "./card"
import Section from "./section"
import Separator from "./separator"
import { desserts } from "@/constants"

export default function Desserts() {
 return (
  <Section title="Desserts" id="desserts">
   {desserts.map((item) => (
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