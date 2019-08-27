import { observable, computed, action } from 'mobx'
import axios from 'axios'


export class UserStore {
   @observable userId
   @observable name
   @observable favorites

   constructor() {
      this.userId = "2"
      // -- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);

      this.name = "Shoobert"
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
      console.log(this.userId)
      console.log(concertId)
      axios.post(`http://localhost:5000/favorite/:${this.userId}/:${concertId}`)
   }


}