import { observable, computed, action } from  'mobx'

export class UserStore {
    @observable userId
    @observable name
    @observable favorites

    constructor() {
        this.userId="2"
        // -- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);

        this.name="Shoobert"
    }
    @action get = (concertId) =>{
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
}



