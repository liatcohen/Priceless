import React, { Component } from 'react'
import './ConcertBox.css'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
const moment = require('moment')

@inject("UserStore")
@observer

class ConcertBox extends Component {

   addToFavorites = () => {
      this.props.UserStore.addToFavorites(this.props.concert.id)
   }

   render() {
      return (
         <Link to={`/concert/${this.props.concert.id}`}>
            <div className="concert-box">
               <div className="concert-box-img">
                  <img src={this.props.concert.img_url} />
               </div>
               <div className="concert-box-info">
                  <div id="concert-box-date">
                     <div id="day">{moment(this.props.concert.date).format("D")} </div>
                     <div id="month">{moment(this.props.concert.date).format("MMM")} </div>
                  </div>
                  <div>
                     <div>{this.props.concert.artist}</div>
                     <div>{this.props.concert.num_of_tickets} Tickets</div>
                     <div>{this.props.concert.city}</div>
                  </div>
               </div>
               <div id="concert-box-price">$ {this.props.concert.asked_price}
                  {/* <button onClick={this.addToFavorites}>save</button> */}
               </div>
            </div>
         </Link>)
   }
}
export default ConcertBox
