import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { res } = props;
  const { resName, cuisine, rating, sla } = res;
  return (
    <div className="res-card">
      <img alt="img1" className="res-logo" src={IMG_URL} />
      <h3>{resName}</h3>
      <h4>{cuisine?.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{sla}minutes</h4>
    </div>
  );
};

export default RestaurantCard;
