import {useContext} from "react"
import UserContext from "../utils/userContext"

const Contact = () => {
  const {loginUser} = useContext(UserContext)
  return (
    <div>
      <h1>Contact Us</h1>
      <h2>{loginUser}</h2>
    </div>
  )
}
export default Contact
