import { useContext } from "react";
import { IMG_URL } from "../utils/constant";
import UserContext from "../utils/hooks/UserContext";
const RestaurantCard = (props) => {
  const { res } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = res?.info;
  const {loggedInUser} = useContext(UserContext);
  // console.log("res",res)
  return (
    <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400">
      <img alt="img1" className="res-logo rounded-lg" src={IMG_URL+cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// export default RestaurantCard;


//higherorder component 

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  }
}

export default RestaurantCard;
