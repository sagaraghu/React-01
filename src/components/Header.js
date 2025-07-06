import { LOGO_URL } from "../utils/constant";
import {Link } from 'react-router'
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online status : {onlineStatus ? "✅" : "🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>  
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
