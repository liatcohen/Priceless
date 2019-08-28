import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class UserStore {
   @observable userId
   @observable name
   @observable favorites = []

   constructor() {
      this.userId = 3
      // -- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);

      this.name = "Shoobert"
      this.favorites = []

   }
   @action get = (concertId) => {
      // get(‘/concert:/concertId’)
      // Return specific concert
   }
   // @computed get userId() {
   //     return this.userId
   // }

   // @computed get userName() {
   //     return this.name
   // }
   //

   @action addToFavorites = async (concertId) => {
      await axios.post(`http://localhost:5000/favorite/${this.userId}/${concertId}`)
   }

   @action getFavorites = async () => {
      const response = await axios.get(`http://localhost:5000/favorites/${this.userId}`)
      this.favorites = [...response.data]
   }


}