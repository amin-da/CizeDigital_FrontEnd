import React,{useState} from "react";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {

 const [openSearch,setOpenSearch]=useState(false)

 const HandleOpen=()=>{

   setOpenSearch(!openSearch)

   const search=document.querySelector('.header_home_nav_left_leftItem_hidden')
   if (openSearch) {
    search.classList.remove("search_menu");
  } else {
    search.classList.add("search_menu");
  }


 }

  return (
    <>
    
      <nav className="header_home_nav">

        <div className='header_home_nav_right'>

          <Link to="/"  className='header_home_nav_right_home'>خانه</Link>
          <Link to="/shop"  className='header_home_nav_right_shop'>فروشگاه</Link>
          <Link to="/blog"  className='header_home_nav_right_blog'>بلاگ</Link>
          <Link to="/404" >خطای ۴۰۴ </Link>

        </div>

        <div className='header_home_nav_left'>

            <div className='header_home_nav_left_rightItems' >
              <a href='#' className='header_home_nav_left_icons_cart'> <FaShoppingCart /></a>
              <a href='#' className='header_home_nav_left_icons_user'><FaUserAlt /></a>
            </div>
   
            <div className='header_home_nav_left_leftItem'>

                <a href='#' onClick={HandleOpen} >
                  <BsSearch />
                </a>

                <div className='header_home_nav_left_leftItem_hidden'>
                  
                  <FaTimes  onClick={HandleOpen} className='exit_search'/>
                  <BsSearch /> 
                   
                </div>

            </div>
        
         
          
        </div>
        
      </nav>

    </>
  );
};

export default Navbar;
