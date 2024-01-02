import {useState} from "react"
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurentCategory from "./RestaurentCategory"

const RestaurantMenu = () => {
  const {restId} = useParams()
  const restData = useRestaurantMenu(restId)
  const [showIndex, setShowIndex] = useState(null)
  if (restData === null) {
    return <Shimmer />
  }
  const {name, cuisines, costForTwoMessage} =
    restData?.data?.cards[0]?.card?.card?.info

  const catagories =
    restData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      cat =>
        cat?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {/* Catagory accordion*/}
      {catagories.map((category, index) => (
        <RestaurentCategory
          categoryList={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={showIndex === index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  )
}
export default RestaurantMenu
