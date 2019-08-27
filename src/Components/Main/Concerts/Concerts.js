import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Concerts extends Component {
   render() {
      return (
         <div>
            Concert details

            <Link to="/concertpage" className="Concerts"> Concert </Link>

        </div>)
   }
}
export default Concerts