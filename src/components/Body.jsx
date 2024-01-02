import {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import RestaurentCard, {withOffers} from "./RestaurentCard"
import Shimmer from "./Shimmer"
import {LIST_URL} from "./../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"
const Body = () => {
  const [restData, setRestData] = useState([])
  const [filteredRest, setFilteredRest] = useState([])
  const [searchTxt, setSearchTxt] = useState("")
  const {loginUser, setUserName} = useContext(UserContext)

  useEffect(() => {
    fetchData()
  }, [])

  const RestaurantCardWithOffer = withOffers(RestaurentCard)

  const fetchData = async () => {
    const resp = await fetch(LIST_URL)
    const json = await resp.json()
    setRestData(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRest(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your network connection!!
      </h1>
    )

  return restData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      {/* <div className="search">Search</div> */}
      <div className="filter-cont flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            name="search"
            value={searchTxt}
            onChange={e => {
              setSearchTxt(e.target.value)
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 py-2 rounded-lg"
            onClick={() => {
              const filterData = restData.filter(res =>
                res?.info?.name.toLowerCase().includes(searchTxt.toLowerCase())
              )
              setFilteredRest(filterData)
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const data = restData.filter(rest => rest.info.avgRating > 4)
              setRestData(data)
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-9">
          <label>User:</label>
          <input
            className="border border-black rounded-lg px-2"
            value={loginUser}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-card-container flex flex-wrap">
        {filteredRest?.map(res => (
          <Link to={"/restaurants/" + res?.info.id} key={res.info?.id}>
            {res.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardWithOffer resData={res} />
            ) : (
              <RestaurentCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
