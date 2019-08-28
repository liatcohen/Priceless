import { observable, computed, action } from 'mobx'
import axios from 'axios'
export class UserStore {
   @observable user = {}
   @observable name
   @observable favorites
   constructor() {
      this.userId = "2"
      this.user = {
         id: '2',
         name: 'Liat Cohen',
         email: 'liatcohen9@gmail.com',
         phone_number: '050-4211600'
      }
      
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