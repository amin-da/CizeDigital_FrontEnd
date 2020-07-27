import React,{useState} from "react";
import "./Navbar.scss";
import RightMenu from './RightMenu/RightMenu'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import ShopingCart from './ShopingCart/ShoppingCart'
// import { Link } from "react-router-dom";

const Navbar = () => {

 const [openSearch,setOpenSearch]=useState(false)

 const HandleOpenSearch=()=>{

   setOpenSearch(!openSearch)

   const search=document.querySelector('.header_home_nav_left_leftItem_hidden')
   if (openSearch) {
    search.classList.remove("search_menu");
  } else {
    search.classList.add("search_menu");
  }
 }
  //Managing BasketShop Modal

  const [openBasket,setOpenBasket]=useState(false);

  const HandleOpenBasket=()=>{

    setOpenBasket(!openBasket)

    const BasketContainer=document.querySelector('.basket_container')
    if (openBasket) {
      BasketContainer.classList.remove("basket_modal");
    } else {
      BasketContainer.classList.add("basket_modal");
    }

  }


 

  return (
    <>
    
      <nav className="header_home_nav">

        <div className='header_home_nav_right'>

          <RightMenu />

        </div>

        <div className='header_home_nav_left'>

            <div className='header_home_nav_left_rightItems' >
              <a href='#' className='header_home_nav_left_icons_user'><FaUserAlt /></a>
              <ShopingCart  HandleOpenBasket={HandleOpenBasket} />
            
            </div>
   
            <div className='header_home_nav_left_leftItem'>

                <a href='#' onClick={HandleOpenSearch} >
                  <BsSearch />
                </a>

                <div className='header_home_nav_left_leftItem_hidden'>
                  
                  <FaTimes  onClick={HandleOpenSearch} className='exit_search'/>
                  <BsSearch /> 
                   
                </div>

            </div>
        
         
          
        </div>
        
      </nav>

    </>
  );
};

export default Navbar;
