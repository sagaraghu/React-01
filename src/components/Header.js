import { LOGO_URL } from "../utils/constant";
import {Link } from 'react-router'
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/hooks/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const handleToggle = () =>{
    setBtnNameReact("Logout")
  }
  // hook for using context 

  //subscribing to store using selector 

  const cartItems = useSelector((store)=>store.cart.items);
 console.log(cartItems);
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-amber-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online status : {onlineStatus ? "✅" : "🔴"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>  
        <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
        <button onClick={handleToggle}>{btnNameReact}</button>
        <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
