import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";




const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body component");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data?.cards[5]?.card?.card?.gridElements.infoWithStyle.restaurants);
    setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container">
      <div className="search bar">
        <div className="search flex justify-center my-5">
        <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <div className="flex ">
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything. .." type="text" name="search" value={searchText} onChange={(e)=>{
    setSearchText(e.target.value)
  }}/>
  <button className="bg-orange-500 rounded-r-lg text-slate-50 px-5 py-2"
  onClick={()=>{
    console.log(searchText);
    const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText));
    setFilteredRestaurant(filteredRestaurant)
  }}
  >search</button></div>
</label>
        </div>
      
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {

              
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList)
            setFilteredRestaurant(filteredList);
          }}
        >
          top
        </button>
      </div>
      <div class="flex justify-center ">

      <div className="restaurant  grid gap-x-8 gap-y-4 grid-cols-4">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
          <RestaurantCard  key={restaurant.info.id}  resData={restaurant?.info} /></Link>
        ))}{" "}
      </div>
      </div>
    </div>
  );
};
export default Body;
