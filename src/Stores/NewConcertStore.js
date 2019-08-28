import { observable, computed, action } from 'mobx'
import axios from 'axios'
import { UserStore } from './UserStore'



let User = new UserStore

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
         seller: User.userId
         //         seller: User.userId
      }
      this.bid = {
         idBid: false,
         // initial_amount - float.
         // concert_id - Int (ref.).
         bid_end_date: Date,
         bid_end_hour: Date,

      }
   }

   @action saveConcert = async (concertInfo) => {
      let concert = { ...concertInfo }
      concert.seller = this.newConcert.seller
      console.log(this.newConcert.seller)
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
         // seller: UserStore.userId
      }
   }

   @action handleInput = (name, value) => {
      console.log(value)
      this.newConcert[name] = value
   }

   @action handleBidInput = (name, value) => {
      console.log(value)
      this.bid[name] = value
   }

   @action chooseBid = () => {
      this.bid.isBid = true
   }

   @action chooseFixedPrice = () => {
      this.bid.isBid = false
   }
}






