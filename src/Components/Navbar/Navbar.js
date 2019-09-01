import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom'
import image from '../../images/logo1.png'
import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            
            <Link to="/" className="Main Logo" activeClassName="active"> <img src={image} height="25" /> </Link>
            <NavLink exact to="/" className="Main" activeClassName="active"> Home </NavLink>
            <NavLink to="/newitem" className="NewItem" activeClassName="active"> Add Concert </NavLink>
            <NavLink to="/favorites" className="Favorites" activeClassName="active"> Favorites </NavLink>
            <NavLink to="/myAccount" className="Account" activeClassName="active"> Account </NavLink>

        </div>)
   }
}
export default Navbar