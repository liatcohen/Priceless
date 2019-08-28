
import { observable, computed, action } from 'mobx'
import axios from 'axios';

export class ConcertsStore {
    @observable concerts = []
    @observable formInputs = {}

    constructor() {
        this.formInputs = {
            artist: '',
            city: '',
            dateFrom: '',
            dateTo: '',
            priceTo: '',
            minTickets: ''
        }
    }

    @action getConcerts = async () => {
      //   console.log("getConcerts")
            const response = await axios.get(`http://localhost:5000/concerts/`)
            // console.log(response);
            // console.log(response.data);

             this.concerts = [...response.data]
        //     Sends get request getConcerts(‘/concerts’) 
        //     Get all concerts,array of objects.
        //     Each contains: {concertId, artists, number of tickets,date,price,image}
        // Optional query: artist, city, dateFrom, dateTo, priceFrom, priceTo, minTickets
    }

    @action postConcert = (concertInfo) => {
        // (“/concert” body)
        // Sends new concert to the server
    }

    //in UserStore
    @action addToFavorite = (concertId) => {
        // (post “/favorite/:userId/:concertId”)
    }
    @action handleInput = (name, value) => {
        this.formInputs[name] = value
    }
    @action search = async () => {
        
        const response = await axios.get(`http://localhost:5000/concerts`, { params : {
            artist: this.formInputs["artist"],
            city: this.formInputs["city"],
            dateFrom: this.formInputs["dateFrom"],
            dateTo: this.formInputs["dateTo"],
            priceTo: this.formInputs["priceTo"],
            minTickets: this.formInputs["minTickets"]
        }} )
            console.log(response.data);

             this.concerts = [...response.data]

        console.log(`SEARCH: 
         artist: ${this.formInputs["artist"]}, 
         city: ${this.formInputs["city"]}, 
         dateFrom: ${this.formInputs["dateFrom"]}, 
         dateTo: ${this.formInputs["dateTo"]}
         minTickets: ${this.formInputs["minTickets"]},  
         priceTo: ${this.formInputs["priceTo"]}, `)
    }

}



