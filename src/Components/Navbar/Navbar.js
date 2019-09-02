import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom'
import image from '../../images/logo4.png'
import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            
            <Link to="/" className="Main Logo" activeClassName="active"> <img src={image} height="30" /> </Link>
            <NavLink exact to="/" className="Main hov" activeClassName="active"> Home </NavLink>
            <NavLink to="/newitem" className="NewItem hov" activeClassName="active"> Add Concert </NavLink>
            <NavLink to="/favorites" className="Favorites hov" activeClassName="active"> Favorites </NavLink>
            <NavLink to="/myAccount" className="hov" activeClassName="active"> Account </NavLink>
            {/* <NavLink to="/myAccount" className="Account hov" activeClassName="active"> Account </NavLink> */}

        </div>)
   }
}
export default Navbar