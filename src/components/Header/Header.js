import React from 'react'
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
function Header() {
  return (
    <nav className='header'>
        <Link to="/">
            <img className='header-logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className="header-option">
            <LocationOnOutlinedIcon/>
        </div>
        <div className="header-option">
            <span className='header-option1'>Hello</span>
            <span className='header-option2'>Select your Address</span>
        </div>
        <div className="search">
            <select>
                <option>All</option>
            </select>
        <input type="text" className="searchInput"/>
        <SearchOutlinedIcon className='searchIcon'/>
        </div>
        <div className="header-nav">
            <Link to="/login" className='header-link'>
                <div className="header-option">
                <span className='header-option1'>Hello Guest</span>
            <span className='header-option2'>Sign In</span>
                </div>
            </Link>
            <Link to="/orders" className='header-link'>
                <div className="header-option">
                <span className='header-option1'>Returns</span>
            <span className='header-option2'>& Orders</span>
                </div>
            </Link>
            <Link to="/checkout" className='header-link'>
                
                <div className="header-basket">
                    <ShoppingCartOutlinedIcon/>
                    <span className='header-option2 basket-count'></span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header