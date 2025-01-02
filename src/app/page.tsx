import Card from "@/components/card"
import Header from "@/components/header"
import Section from "@/components/section"
import Separator from "@/components/separator"
import { APPETIZERS, CURRY, DESSERTS, DISHES, DRINKS } from "@/lib/data"

export default function Home() {
 return (
  <>
   <Header />
   <Section title="Appetizers">
    {APPETIZERS.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
      image={item.image}
      href={item.href}
     />
    ))}
   </Section>
   <Separator />
   <Section title="Dishes">
    {DISHES.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
      image={item.image}
      href={item.href}
     />
    ))}
   </Section>
   <Separator />
   <Section title="Curry">
    {CURRY.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
      image={item.image}
      href={item.href}
     />
    ))}
   </Section>
   <Separator />
   <Section title="Desserts">
    {DESSERTS.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
      image={item.image}
      href={item.href}
     />
    ))}
   </Section>
   <Separator />
   <Section title="Drinks">
    {DRINKS.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      category={item.category}
      price={item.price}
      image={item.image}
      href={item.href}
     />
    ))}
   </Section>
  </>
 )
}