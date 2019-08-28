import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class UserStore {
   @observable user = {}
   @observable userConcerts=[]

   constructor() {
      // this.userId = "2"
      this.user = {
         id: '2',
         name: 'Liat Cohen',
         email: 'liatcohen9@gmail.com',
         phone_number: '0504211600'
      }
      // this.userConcerts.push(1)
      // this.name = "Shoobert"
   }
   @action get = (concertId) => {
      // get(‘/concert:/concertId’)
      // Return specific concert
   }

   @action getUserConcerts = async () => {
      console.log("getUserConcerts")
      const response = await axios.get(`http://localhost:5000/user-concerts/${this.user.id}`)
      this.userConcerts = [...response.data]
   }

   @action addToFavorites = async (concertId) => {
      console.log(this.userId)
      console.log(concertId)
      axios.post(`http://localhost:5000/favorite/:${this.userId}/:${concertId}`)
   }


}