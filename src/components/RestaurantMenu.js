import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

import { MENU_IMG } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [vegdata,setvegdata]=useState();
  // const abc=28974;
//   console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
    imageId
  } = resInfo?.cards[0]?.card?.card?.info || [];
//   console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//     ?.card);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

// const teju=itemCards.map((a)=>{
//     return a.card.info.itemAttribute.vegClassifier=="VEG";
// })
// console.log(teju)
  if (resInfo === null) return <Shimmer />;
  return (
    <>
      <div className="menu">
        <div className="menu-card mx-64">
          <div className="header grid grid-cols-1 divide-y">
            <div className="flex justify-between py-5">
              <h1 className="font-bold text-3xl">{name}</h1>
              <p className="semi-bold text-xs bg-green-700 text-slate-50 p-3 m-8">{avgRatingString} stars</p>
              
            </div>
            <div className="flex justify-between py-1">
            <h2 className="font-light">{cuisines.join(" , ")}</h2>
              <p>{totalRatingsString}</p>
            </div>
            <div className="flex justify-between py-1 font-semibold">
            <p>{costForTwoMessage}</p>
            <p>{sla.slaString}</p>
          </div>
          </div>
<div className="recom">
    <h1>Recommended
        ({resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length})
    </h1>
<ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
               <div className="flex justify-between py-6"> 
                <div className=" grid grid-cols-1 divide-y">
               <div className="font-bold text-lg">
              <p> {item.card.info.name}</p>
              {" Rs."} {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}</div> 
               <div className="font-light text-xs"> 
               {item.card.info.description}
               </div>
                </div> 
               <div>
                  <img
          className="res-logo rounded-xl h-40 w-44"
          alt="res-logo"
          src={MENU_IMG+item.card.info.imageId}/>
               </div>
               </div>
              </li>
            ))}
          </ul>

</div>
        </div>
      </div>

    </>
  );
};

export default RestaurantMenu;