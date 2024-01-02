import {useDispatch} from "react-redux"
import {addItems} from "../utils/cartSlice"
import {CDN_URL} from "./../utils/constants"
const ItemList = ({itemCards}) => {
  const dispatch = useDispatch()
  const handleItems = item => {
    dispatch(addItems(item))
  }
  return (
    <div>
      {itemCards.map(item => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div>
            <div className="py-2">
              <span className="font-bold text-lg ">
                {item?.card?.info?.name}
              </span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <div className="text-xs">{item?.card?.info?.description}</div>
          </div>
          <div>
            <button
              className="absolute rounded-lg bg-black text-white"
              onClick={() => handleItems(item)}
            >
              Add +
            </button>
            <img
              alt="image"
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-36"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
