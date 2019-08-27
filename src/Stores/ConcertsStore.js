
import { observable, computed, action } from  'mobx'

export class ConcertsStore {
    @observable concerts = []
    // @observable numTables = 10

    @action getConcerts = (query) => {
    //     Sends get request getConcerts(‘/concerts’) 
    //     Get all concerts,array of objects.
    //     Each contains: {concertId, artists, number of tickets,date,price,image}
    // Optional query: artist, city, dateFrom, dateTo, priceFrom, priceTo, minTickets
    }
        
    @action postConcert = (concertInfo)=>{
        // (“/concert” body)
        // Sends new concert to the server
    }
   
    @action addToFavorite = (concertId)=>{
        // (post “/favorite/:userId/:concertId”)
    }
    @action Search = (query)=>{
        // get(“/concerts”, body)
        // Sends get request getConcerts(‘/concerts’) with query: artist, city, dateFrom, dateTo, priceFrom, priceTo, minTickets

    }
   
}



