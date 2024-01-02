import {useState} from "react"
import ItemList from "./ItemList"

const RestaurentCategory = ({categoryList, showItems, setShowIndex}) => {
  const {title, itemCards} = categoryList

  return (
    <div className="w-6/12 bg-gray-50 my-4 mx-auto p-4 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          setShowIndex()
        }}
      >
        <span className="font-bold text-lg">
          {title}({itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList itemCards={itemCards} />}
    </div>
  )
}

export default RestaurentCategory
