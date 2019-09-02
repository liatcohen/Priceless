import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class UserStore {
   @observable user = {}
   @observable name
  
   @observable userConcerts=[]
   @observable favorites=[]


   constructor() {
   
      this.user = {
         id: '4',
         name: 'Liat Cohen',
         email: 'liatcohen9@gmail.com',
         phone_number: '050-4211600'
      }
      // this.user = {
      //    id: '1',
      //    name: 'Ofer Gilboa',
      //    email: 'ofer1gilboa@gmail.com',
      //    phone_number: '052-8283312'
      // }
      

   }
   @action get = (concertId) => {
      // get(‘/concert:/concertId’)
      // Return specific concert
   }

   @action getUserConcerts = async () => {
      const response = await axios.get(`http://localhost:5000/user-concerts/${this.user.id}`)
      this.userConcerts = [...response.data]
   }

   @action deleteConcert = async (concertId) => {
      const response = await axios.put(`http://localhost:5000/delete-concert/${concertId}`);
      this.getUserConcerts()
   }
   @action markAsSold = async (concertId) => {
      console.log("markAsSold")
      const response = await axios.put(`http://localhost:5000/sold/${concertId}`);
      this.getUserConcerts()
   }
   @action addToFavorites = async (concertId) => {
      await axios.post(`http://localhost:5000/favorite/${this.user.id}/${concertId}`)
   }

   @action getFavorites = async () => {
      const response = await axios.get(`http://localhost:5000/favorites/${this.user.id}`)
      this.favorites = [...response.data]
   }

}