import React, { useEffect, useState } from "react";
import { MENUAPI_URL, RESMENU_IMG_URL } from "../utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  // const [resMenuInfo, setResMeniInfo] = useState(null);

  // const {resId} = useParams();

  // useEffect(()=>{
  //     fetchMenu();
  // },[]);

  // const fetchMenu = async() => {
  //     const data = await fetch(MENUAPI_URL+resId);
  //     const json = await data.json();
  //     setResMeniInfo(json.data)
  // }

  // will create custo hook as menu card can have only render logic we can move fetch call into a custom hook

  const resMenuInfo = useRestaurantMenu();

  if (resMenuInfo === null) return <h1>Loading....</h1>;

  const { name, cuisines, costForTwoMessage } =
    resMenuInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards, title } =
    resMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  console.log(
    "itemCards",
    resMenuInfo
  );

  const categories =
    resMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => item?.card?.card["@type"]?.includes("ItemCategory")
    );
//   console.log("categories", categories);
  //     return (
  //     <div className='menu'>
  //         <h1>{name}</h1>
  //         <h3>{cuisines?.join(', ')} - {costForTwoMessage}</h3>
  //         <h2>Menu</h2>
  //         <ul>
  //         <div>{title} {itemCards?.length || 0}</div>
  //         {itemCards?.map((item)=>
  //             (<div key={item?.card?.info?.id            }
  //                 style={{
  //                     "margin": "auto 100px"
  //                 }}>

  //             <div style={{
  //                 "display": "flex",
  //     "alignItems": "center",
  //     "justifyContent":"space-between"
  //             }}>
  //                 <li> {item?.card?.info?.name}</li>
  //                 <span>Rs {item?.card?.info?.price/100}</span>
  //             <img alt="img1" className="res-logo" src={RESMENU_IMG_URL+item?.card?.info?.imageId} />
  //             </div>
  //             </div>)

  //         )}
  //         </ul>
  //     </div>
  //   )

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/** categories accordion */}
      {categories?.map((item, index) => (
        <RestaurantCategory
          data={item?.card?.card}
          key={item?.card?.card?.title}
        //   setShowIndex={() => setShowIndex(index)}
        //   showItems={index === showIndex ? true : false}
        showItems={index === showIndex}
        setShowIndex={() => setShowIndex(prev => (prev === index ? null : index))}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
