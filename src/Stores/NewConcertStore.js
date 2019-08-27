import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class NewConcertStore {
   @observable newConcert

   constructor() {
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
      }
   }
   @action saveConcert = async (concertInfo) => {
      let concert = {
         artist: concertInfo.artist,
         date: concertInfo.date,
         hour: concertInfo.hour,
         city: concertInfo.city,
         venue: concertInfo.venue,
         num_of_tickets: concertInfo.num_of_tickets,
         asked_price: concertInfo.asked_price,
         original_price: concertInfo.original_price,
         additional_info: concertInfo.additional_info,
      }
      console.log(1 + concert)
      await axios.post(`http://localhost:5000/concert/`, concert)
      console.log(2 + concert)
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
      }
   }

   @action handleInput = (name, value) => {
      this.newConcert[name] = value
   }
}







