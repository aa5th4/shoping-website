
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user },dispatch] = useStateValue();
  const handleAuthentication = () =>{
    if(user) {
      auth.signOut();
    }
  }
  
  return (
    <div className="header">
        <Link to="/">
        <img
          className="header__logo"
          src="https://img.search.brave.com/24PbN2Kvfb5-yKygvMbtv6ReqqOOM579g36Iy-VhmXA/rs:fit:580:386:1/g:ce/aHR0cHM6Ly93d3cu/Y3JlYXRpdmVmYWJy/aWNhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMy9N/b25vZ3JhbS1TVy1M/b2dvLURlc2lnbi1i/eS1HcmVlbmxpbmVz/LVN0dWRpb3MtNTgw/eDM4Ni5qcGc" alt=""
        />
      </Link>
    


      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={ !user && './login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign IN'}</span>
          </div>
       
          </Link>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Bucket</span>
        </div>

       
       <Link to="/checkout">
            <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}
            </span>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Header;