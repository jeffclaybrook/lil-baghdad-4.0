import Appetizers from "@/components/appetizers"
import Curry from "@/components/curry"
import Desserts from "@/components/desserts"
import Dishes from "@/components/dishes"
import Drinks from "@/components/drinks"
import Header from "@/components/header"

export default function Page() {
  return (
    <>
      <Header />
      <Appetizers />
      <Dishes />
      <Curry />
      <Desserts />
      <Drinks />
    </>
  )
}