import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class UserStore {
   @observable user = {}
   @observable name
   @observable favorites
   // id - pk.
   // name - str.
   // email - str.
   // phone_number - Int.

   constructor() {
      this.userId = "2"
      // -- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);
      this.user = {
         id: '2',
         name: 'Liat Cohen',
         email: 'liatcohen9@gmail.com',
         phone_number: '0504211600'
      }

      this.name = "Shoobert"
   }
   @action get = (concertId) => {
      // get(‘/concert:/concertId’)
      // Return specific concert
   }
  

   @action addToFavorites = async (concertId) => {
      console.log(this.userId)
      console.log(concertId)
      axios.post(`http://localhost:5000/favorite/:${this.userId}/:${concertId}`)
   }


}