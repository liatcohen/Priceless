import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './ConcertPage.css'


@inject("ConcertStore")
@observer
class ConcertPage extends Component {
   render() {
      return (
         <div className="concertSection">
            <div className="concertPhoto"><img src={this.props.ConcertStore.concert.img_url} alt="Smiley face" height="300" width="700"></img></div>
            <div>{this.props.ConcertStore.concert.artist}</div>
            <div className="ticketSection">
               <div className="info">
                  <div>About</div>
                  <div>{this.props.ConcertStore.concert.additional_info}</div>
               </div>
               <div className="ticketData">
                  <div>Contact Seller</div>
                  <div>
                     <div>{this.props.ConcertStore.concert.venue}</div>
                     <div>{this.props.ConcertStore.concert.city}, {this.props.ConcertStore.concert.country}</div>
                     <div>{this.props.ConcertStore.concert.asked_price} $</div>
                  </div>
                  <div>{this.props.ConcertStore.concert.date}</div>
               </div>
               

            </div>
        </div>)
   }
}
export default ConcertPage