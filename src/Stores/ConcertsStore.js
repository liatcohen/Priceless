
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
            priceFrom: '',
            priceTo: 20,
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

    @action addToFavorite = (concertId) => {
        // (post “/favorite/:userId/:concertId”)
    }
    @action handleInput = (name, value) => {
        this.formInputs[name] = value
    }
    @action search = () => {
        // console.log(`SEARCH: 
        //  artist: ${this.formInputs["artist"]}, 
        //  city: ${this.formInputs["city"]}, 
        //  dateFrom: ${this.formInputs["dateFrom"]}, 
        //  dateTo: ${this.formInputs["dateTo"]}
        //  minTickets: ${this.formInputs["minTickets"]}, 
        //  priceFrom: ${this.formInputs["priceFrom"]}, 
        //  priceTo: ${this.formInputs["priceTo"]}, `)
        // this.formInputs={...formInputs}




        // console.log(this.formInputs)
        // get(“/concerts”, body)
        // Sends get request getConcerts(‘/concerts’) with query: artist, city, dateFrom, dateTo, priceFrom, priceTo, minTickets

    }

}



