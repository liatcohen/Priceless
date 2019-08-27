import { observable, computed, action } from  'mobx'

export class ConcertStore {
    @observable concert = null
    // @observable numTables = 10
        
    @action getConcert = (concertId) =>{
        // get(‘/concert:/concertId’)
        // Return specific concert
    }
   
   
   
}



