import {MENU_URL} from "./../utils/constants"
import {useEffect, useState} from "react"
const useRestaurantMenu = restId => {
  const [restData, setRestData] = useState(null)
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + restId)
    const json = await data.json()
    setRestData(json)
  }
  return restData
}

export default useRestaurantMenu
