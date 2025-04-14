import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList)
    
    const bestRating = () => {
        const list = resList.filter((item)=> item.rating>4);
        setRestaurantList(list);
    }
    
  return (
    <div className="body">
      <div className="Search">Search</div>
      <button onClick={bestRating} >BestRating</button>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard res={res} key={res?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
