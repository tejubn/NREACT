import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utilities/mockdata";
import { useState } from "react";
const Body = () => {
  const [listofRestaurants,getListofRestaurants]=useState();
  
  return (
    <div className="container">
      <div className="search bar">
       
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
onClick={()=>{console.log("hello")}}>top</button>
      </div>
      <div className="restaurant">
        {reslist.map((restaurant)=>{
 <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        })}
       
      </div>
    </div>
  );
};
export default Body;
