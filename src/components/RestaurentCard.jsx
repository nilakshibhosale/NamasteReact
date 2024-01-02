import {CDN_URL} from "../utils/constants"
import {Link} from "react-router-dom"
const RestaurentCard = props => {
  const {resData} = props
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} =
    resData.info

  return (
    <div className="rest-card m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <Link
        to={"/restaurant/" + resData.info?.id}
        key={resData.info?.id}
        className="rest-card-link"
      >
        <img
          src={CDN_URL + cloudinaryImageId}
          className="res-logo rounded-lg relative h-[240px]"
          alt="cards-img"
        />
        <h3 className="font-bold text-lg py-4">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
      </Link>
    </div>
  )
}

export const withOffers = RestaurentCard => {
  return props => {
    const {resData} = props
    const {aggregatedDiscountInfoV3} = resData.info
    return (
      <>
        <div className="absolute bg-black text-white m-2 p-2 rounded-lg z-50">
          {aggregatedDiscountInfoV3?.header}
        </div>
        <RestaurentCard {...props} />
      </>
    )
  }
}
export default RestaurentCard
