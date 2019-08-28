import { observable, computed, action } from 'mobx'
import axios from 'axios'
import { UserStore } from './UserStore'

let User = new UserStore
console.log(User.user.id)

export class NewConcertStore {
   @observable newConcert
   @observable bid

   constructor() {
      this.newConcert = {
         artist: "",
         date: Date,
         hour: Date,
         country: "",
         city: "",
         venue: "",
         num_of_tickets: Number,
         asked_price: Number,
         original_price: Number,
         additional_info: "",
         seller: User.user.id,
         isBid: false,
         bid_end_date: Date,
         bid_end_hour: Date,
      }
   }


   @action saveConcert = async (concertInfo) => {
      let concert = { ...concertInfo }
      console.log(concert.artist)
      console.log(concert.date)
      console.log(concert.hour)
      console.log(concert.country)
      console.log(concert.city)
      console.log(concert.venue)
      console.log(concert.asked_price)
      console.log(concert.num_of_tickets)
      if (concert.date) return alert("Date field is empty")
      // if (!concert.hour) return alert("Hour field is empty")
      // if (!concert.country) return alert("Country field is empty")
      // if (!concert.city) return alert("City field is empty")
      // if (!concert.venue) return alert("Venue field is empty")
      // if (!concert.asked_price) return alert("Asked Price field is empty")
      // if (!concert.num_of_tickets) return alert("Number of tickets field is empty")
      if (!concert.artist) return alert("Artist field is empty")

      concert.seller = this.newConcert.seller
      console.log(this.newConcert.seller)
      console.log("######concert")
      console.log(concert)
      await axios.post(`http://localhost:5000/concert`, concert)
      this.newConcert = {
         artist: "",
         date: Date,
         hour: Date,
         country: "Israel",
         city: "",
         venue: "",
         num_of_tickets: Number,
         asked_price: Number,
         original_price: Number,
         additional_info: "",
         idBid: true,
         bid_end_date: Date,
         bid_end_hour: Date,
      }
   }

   @action handleInput = (name, value) => {
      console.log(value)
      this.newConcert[name] = value
   }

   // @action handleBidInput = (name, value) => {
   //    console.log(value)
   //    this.ne[name] = value
   // }

   @action chooseBid = () => {
      console.log("chooseBid")
      let concert = { ...this.newConcert }
      concert.isBid = true
      this.newConcert = { ...concert }
   }

   @action chooseFixedPrice = () => {
      console.log("chooseFixedPrice")

      let concert = { ...this.newConcert }
      concert.isBid = false
      this.newConcert = { ...concert }

   }
}






