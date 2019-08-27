import React, { Component } from 'react'
import './ConcertBox.css'

class ConcertBox extends Component {
   render() {
      return (
         <div className="concert-box">
            <div className="concert-box-img">
               <img src={this.props.concert.img_url} />
            </div>
            <div className="concert-box-info">
               <div id="concert-box-date">
                  {this.props.concert.date}
               </div>
               <div>
                  <div>{this.props.concert.artist}</div>
                  <div>{this.props.concert.num_of_tickets} Tickets</div>
                  <div>{this.props.concert.city}</div>
               </div>
            </div>
            <div id="concert-box-price">$ {this.props.concert.asked_price}
            </div>
         </div>)
   }
}
export default ConcertBox