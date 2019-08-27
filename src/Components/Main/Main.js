import React, { Component } from 'react'
import ConcertBox from './ConcertBox/ConcertBox';
import SearchBar from './SearchBar/SearchBar';

class Main extends Component {
   render() {
      return (
         <div>
            "Concerts.forEch(c=><ConcertBox/>)"
            <SearchBar />
         </div>)
   }
}
export default Main