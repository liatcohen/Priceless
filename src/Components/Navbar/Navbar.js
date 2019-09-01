import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            
            <Link to="/" className="Main"> <img src="http://icons.iconarchive.com/icons/killaaaron/adobe-cc-circles/1024/Adobe-Pl-icon.png" width="30" height="30" /> </Link>
            <Link to="/newitem" className="NewItem"> Add Concert </Link>
            <Link to="/favorites" className="Favorites"> Favorites </Link>
            <Link to="/myAccount" className="Account"> Account </Link>

        </div>)
   }
}
export default Navbar