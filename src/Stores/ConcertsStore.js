
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
        // let concert1 = {
        //     id: 111,
        //     artist: "Lola marsh",
        //     date: "13/03/20",
        //     country: "israel",
        //     city: "Tel aviv",
        //     venue: "Barbi",
        //     num_of_tickets: 2,
        //     asked_price: 30,
        //     original_price: 50,
        //     additional_info: "great show!!!",
        //     seller: 123,
        //     status: "active",
        //     img_url: "https://www.zappa-club.co.il/download/showPic/show_pic6773_img.jpg",
        // }
        // let concert2 = {
        //     id: 222,
        //     artist: "Dudu Tasa",
        //     date: "06/11/19",
        //     country: "israel",
        //     city: "Jerusalem",
        //     venue: "sultan",
        //     num_of_tickets: 3,
        //     asked_price: 20,
        //     original_price: 40,
        //     additional_info: "bla bla bla",
        //     seller: 456,
        //     status: "active",
        //     img_url: "http://www.habama.co.il/Habama/Upload/Music/%D7%93%D7%95%D7%93%D7%95-%D7%98%D7%A1%D7%94---%D7%90%D7%95%D7%94%D7%93-%D7%A8%D7%95%D7%9E%D7%A0%D7%95.jpg"
        // }
        // this.concerts = []
        // this.concerts.push(concert1)
        // this.concerts.push(concert2)
    }

    @action getConcerts = async () => {
        console.log("getConcerts")
            const response = await axios.get(`http://localhost:5000/concerts/`)
            console.log(response);
            console.log(response.data);

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
        console.log(`SEARCH: 
         artist: ${this.formInputs["artist"]}, 
         city: ${this.formInputs["city"]}, 
         dateFrom: ${this.formInputs["dateFrom"]}, 
         dateTo: ${this.formInputs["dateTo"]}
         minTickets: ${this.formInputs["minTickets"]}, 
         priceFrom: ${this.formInputs["priceFrom"]}, 
         priceTo: ${this.formInputs["priceTo"]}, `)
        // this.formInputs={...formInputs}



      
        // console.log(this.formInputs)
        // get(“/concerts”, body)
        // Sends get request getConcerts(‘/concerts’) with query: artist, city, dateFrom, dateTo, priceFrom, priceTo, minTickets

    }

}



