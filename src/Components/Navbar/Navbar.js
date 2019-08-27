import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            <Link to="/" className="Main"> Home </Link>
            <Link to="/newitem" className="NewItem"> Add Concert </Link>
        </div>)
   }
}
export default Navbar