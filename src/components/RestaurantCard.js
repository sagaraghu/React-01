import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { res } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = res?.info;
  return (
    <div className="res-card">
      <img alt="img1" className="res-logo" src={IMG_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
