import {useSelector} from "react-redux"
import ItemList from "./ItemList"

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  return (
    <>
      <div className="text-center font-bold text-2xl m-4 p-4">Cart</div>
      <div className="w-6/12 bg-gray-50 my-4 mx-auto p-4 shadow-lg">
        <ItemList itemCards={cartItems} />
      </div>
    </>
  )
}

export default Cart
