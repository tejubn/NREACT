import { BiChevronDown } from "react-icons/bi";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  // console.log(data.itemcards.length)
const [showItems,setShowItems]=useState(true);
const handleClick=()=>{
  setShowItems(!showItems)
}
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <p className="text-xl font-bold">
            {data.title} ({data.itemCards.length})
          </p>
          <BiChevronDown className="inline" />
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
