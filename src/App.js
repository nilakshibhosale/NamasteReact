// let heading = React.createElement("h1", {id: "heading"}, "hello world React")
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/userContext"
import {Provider} from "react-redux"
import addStore from "./utils/addStore"
import Cart from "./components/Cart"
//using createElement
// let parent = React.createElement("div", {id: "parent"}, [
//   React.createElement("div", {id: "child"}, [
//     React.createElement("h1", {}, "hello world h1!"),
//     React.createElement("h2", {}, "hello world h2!"),
//   ]),
//   React.createElement("div", {id: "child2"}, [
//     React.createElement("h1", {}, "hello world h1!"),
//     React.createElement("h2", {}, "hello world h2!"),
//   ]),
// ])

// let jsxHeading = <h1>JSX heading!</h1>

//------------functional componet------------------
// const elem = <span>element!!</span>
// const Title = () => {
//   return (
//     <div>
//       {elem}
//       <h1>Title</h1>
//     </div>
//   )
// }
// const HeaderCoponent = () => {
//   return (
//     <div>
//       <Title />
//       <h1>functional componet!</h1>
//     </div>
//   )
// }

//------------Food App-------------------
/*
  -Header
    -logo
    -nav links(home,aboutus)
  -Body
    -Search
    -Card
  -Footer
    -copy right link, contact links
*/

const FoodApp = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Nilakshi B",
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={addStore}>
      <UserContext.Provider value={{loginUser: userName, setUserName}}>
        <div className="food-app-main">
          <HeaderComponent />
          {/* <Body /> 
        outlet is for router
      */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
])
let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<FoodApp />)

//using Routes
root.render(<RouterProvider router={appRouter} />)
