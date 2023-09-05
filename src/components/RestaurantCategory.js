import { BiChevronDown ,BiChevronUp} from "react-icons/bi";
import {GrDown,GrUp} from "react-icons/gr";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data,showItems,setShowindex }) => {
 
const [toggle,setToggle]=useState(false);
  // console.log(data.itemcards.length)
// const [showItems,setShowItems]=useState(false);
const handleClick=()=>{
  // setShowItems(!showItems)
  setShowindex()
  setToggle(!toggle)
}
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <p className="text-xl font-bold">
            {data.title} ({data.itemCards.length})
          </p>
         {toggle ?<GrUp className="inline" />:<GrDown className="inline" />}
        </div>

        {showItems && toggle && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
