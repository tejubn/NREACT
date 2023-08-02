import { BiChevronDown } from "react-icons/bi";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  // console.log(data.itemcards.length)
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 ">
        <div className="flex justify-between">
          <p>
            {data.title} ({data.itemCards.length})
          </p>
          <BiChevronDown className="inline" />
        </div>

        <ItemList items={data.itemCards} />
      </div>
    </>
  );
};
export default RestaurantCategory;
