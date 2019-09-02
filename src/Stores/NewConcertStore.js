import { observable, computed, action } from 'mobx'
import axios from 'axios'
import { UserStore } from './UserStore'

let User = new UserStore
// console.log(User.user.id)

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
         bid_end_time: Date,
      }
   }

   @action saveConcert = async () => {
      let concert = this.newConcert
      if (concert.original_price == Number) {concert.original_price= this.newConcert.asked_price }
      console.log(concert)
      // console.log(concert.seller)
      // console.log("######concert")
      // console.log(concert)
      // console.log("bid_end_date")
      // console.log(this.newConcert.bid_end_date)
      // console.log("bid_end_time")
      // console.log(this.newConcert.bid_end_time)

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
         idBid: false,
         bid_end_date: Date,
         bid_end_time: Date,
      }
      console.log("saved")
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






