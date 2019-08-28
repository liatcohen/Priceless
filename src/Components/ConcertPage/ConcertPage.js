import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './ConcertPage.css'

const moment = require('moment')
@inject("UserStore")
@inject("ConcertStore")
@observer
class ConcertPage extends Component {

   componentDidMount() {
      this.props.ConcertStore.getConcert(this.props.match.params.id)
   }

   addToFavorites = () => {
      // console.log(this.props)
      this.props.UserStore.addToFavorites(this.props.match.params.id)
      // this.props.UserStore.addToFavorites(5)
   }

   render() {

      return (
         <div className="concertSection">
            <div className="concertPhoto"><img src={this.props.ConcertStore.concert.img_url} alt="Smiley face" height="300" width="700"></img></div>
            <div className="concertTitle">{this.props.ConcertStore.concert.artist}</div>
            <div className="ticketSection">

               <div className="ticketData">
                  <div className="concertDate">
                     <div id="hour">{moment(this.props.ConcertStore.concert.date).format('LT')} </div>
                     <div id="month">{moment(this.props.ConcertStore.concert.date).format("MMM Do")} </div>
                     <div id="day">{moment(this.props.ConcertStore.concert.date).format("YYYY")} </div>

                  </div>
                  <div className="place">
                     <div>{this.props.ConcertStore.concert.venue}</div>
                     <div>{this.props.ConcertStore.concert.city}, {this.props.ConcertStore.concert.country}</div>
                     <div className="price">Price: {this.props.ConcertStore.concert.asked_price} $</div>
                  </div>
                  <div className="buttonBox"><span className="contactButton">Contact Seller</span></div>
               </div>
               <div className="info">
                  <div>About</div>
                  <div>{this.props.ConcertStore.concert.num_of_tickets} Tickets Available</div>

                  <div>{this.props.ConcertStore.concert.additional_info}</div>
                  <button onClick={this.addToFavorites}>save</button>
               </div>
            </div>
         </div>)
   }
}
export default ConcertPage