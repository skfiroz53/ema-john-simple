 import React from 'react';
 import './Header.css'
 import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

 const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
               <Link to="/">Shop</Link>
               <Link to="/Orders">Order Review</Link>
               <Link to="/inventory">Manage Inventory</Link>
               <Link to="/login">Login</Link>
            </div>
        </nav>
    );
 };

 export default Header;






















//  =======================pactice start ===========================

// import React from 'react';
// import css from './Header.css'
// import Logo from '../../images/Logo.svg';
// const Header = () => {
//     return (
//         <nav className='header'>
//              <img src={Logo} alt="" />
//              <div>
//                 <a href="/Order">Order</a>
//                 <a href="/Order Review">Order Review</a>
//                 <a href="/Manage Inventory">Manage Inventory</a>
//                 <a href="/Login">Login</a>
//              </div>
//         </nav>
//     );
// };

// export default Header;