import User from "./User"
import UserClass from "./UserClass"
import React from "react"
class About extends React.Component {
  constructor() {
    super()
    console.log("Parent constructor")
  }
  componentDidMount() {
    console.log("Parent componentDidMount")
  }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is React</h2>
        {/* class based component */}
        <UserClass name="Nilakshi Bhosale(class)" location="Pune" />
      </div>
    )
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is React</h2>
//       <User name=" Nilakshi Bhosale(function)" location="Pune" />
//       {/* class based component */}
//       <UserClass name="Nilakshi Bhosale(class)" location="Pune" />
//     </div>
//   )
// }

export default About
