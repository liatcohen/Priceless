import { observable, computed, action } from 'mobx'

export class NewConcertStore {
   @observable newConcert

   constructor() {
      this.newConcert = {
         artist: "",
         date: Date,
         hour: Date,
         country: "israel",
         city: "Tel aviv",
         venue: "",
         num_of_tickets: Number,
         asked_price: Number,
         original_price: Number,
         additional_info: "",
      }

   }
   @action saveConcert = () => {
      // post(‘/concerts’)
   }

   @action hndleInput = () => {
      // set
   }



}



