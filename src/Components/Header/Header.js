import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="nav">
                <a href="/shop"> Shop</a>
                <a href="/order"> Order Review</a>
                <a href="/manage"> Manage Inventory here</a>
           </div>
        </div>
    );
};

export default Header;