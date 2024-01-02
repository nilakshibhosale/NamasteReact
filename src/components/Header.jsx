import Logo from "../icons/food-app.png"
import {useState, useContext} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"
import {useSelector} from "react-redux"

const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
  const onlineStatus = useOnlineStatus()
  const {loginUser} = useContext(UserContext)
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="flex justify-between shadow-lg bg-yellow-100">
      <img src={Logo} alt="app-logo" className="w-36" />
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart"> Cart - {cartItems.length}</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4 font-bold">{loginUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent
