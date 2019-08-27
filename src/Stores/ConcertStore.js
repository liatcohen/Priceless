import { observable, computed, action } from 'mobx'
import axios from 'axios';

export class ConcertStore {
    @observable concert

    constructor() {
        this.concert = {
            id: 111,
            artist: "Lola marsh",
            date: "13/03/20",
            country: "israel",
            city: "Tel aviv",
            venue: "Barbi",
            num_of_tickets: 2,
            asked_price: 30,
            original_price: 50,
            additional_info: "great show!!!",
            seller: 123,
            status: "active",
            img_url: "https://www.zappa-club.co.il/download/showPic/show_pic6773_img.jpg",
        }

    }
    @action getConcert = async (concertId) => {
        console.log("@action getConcert")
        // get(‘/concert:/concertId’)
        // Return specific concert

        const response = await axios.get(`http://localhost:5000/concert/${concertId}`)
            console.log(response);
            console.log(response.data);

             this.concert = {...response.data}
    }



}



