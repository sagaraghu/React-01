import React from "react";
import { RESMENU_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useLocation, useMatch } from 'react-router';
import { addItem } from "../utils/cartSlice";

function ItemList(props) {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAddItem = (i) =>{
    dispatch(addItem(i));
  }

//   const location = useLocation();
//   const isCartPage = location.pathname === '/cart';

// const isCartPage = window.location.pathname === '/cart'; {/** .includes('cart')*/}

const match = useMatch('cart');
const isCartPage = !!match;

  console.log("isCartPage",isCartPage)
  return (
    <div >
      {items?.map((i) => (
        <div
          key={i?.card?.info?.id}
          className="m-2 p-2  border-gray-200 border-b-2 text-left flex justify-between"
          data-testid="itemList"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{i?.card?.info?.name}</span>
              <span> - ₹ {i?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{i?.card?.info?.description}</p>
          </div>
          <div className=" p-4 w-3/12">
            {!isCartPage && <div className="absolute ">
              <button className="p-2 mx-16 bg-black shadow-lg  rounded-lg text-white cursor-pointer"
              onClick={()=>handleAddItem(i)}
              >
                Add +
              </button>
            </div>}
            <img
              src={RESMENU_IMG_URL + i?.card?.info?.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
