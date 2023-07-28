import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
const green="bg-green-600 text-xs font-semibold text-white px-2";
const red="bg-red-600 text-xs font-semibold text-white px-2";

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
let data="";
  if(avgRating>=4.0)
{
  data=green;
}
else{
  data=red;
}
  return (
    <div className="">
      <div className="container shadow-md p-4">
        <img
          className="res-logo m-3"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="mx-3 mb-3">
          
        <h3 className="font-bold my-1">{name}</h3>
        <p className="text-xs	">{cuisines.join(", ")}</p>
        <div className="flex justify-between my-3">       
        
            <button className={data}>
            <i class="fa-solid fa-star"></i>
            {avgRating}
          </button>

          <h4 className="text-sm font-semibold">{deliveryTime} mins</h4>
          <h4 className="text-sm font-semibold">₹{costForTwo / 100} FOR TWO</h4>
          
        </div>
      
        </div>
        </div>
    </div>
  );
};
export default RestaurantCard;
