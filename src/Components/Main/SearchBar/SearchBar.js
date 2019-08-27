import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import './SearchBar.css'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
// const slider = require('react-rangeslider')

@inject("ConcertsStore")
@observer
class SearchBar extends Component {
   state = {
      value: 10
   }
   handleInput = (e) => {
      this.props.ConcertsStore.handleInput(e.target.name, e.target.value)
   }

   handlePriceChange = (value) => {
      this.props.ConcertsStore.handleInput('priceTo', value)
   }

   render() {
      let store = this.props.ConcertsStore.formInputs
      return (
         <div className="search-bar">
            <div>Search By</div>
            <div>
               Artist<input type="text" name="artist"
                  placeholder="Enter Artist.."
                  value={store.artist}
                  onChange={this.handleInput} />
            </div>
            <div>
               City<input type="text" id="city" name="city" placeholder="Enter city.."
                  value={store.city}
                  onChange={this.handleInput} />
            </div>
            <div className='slider'>
               Price:
               <Slider
                  min={0}
                  max={200}
                  value={store.priceTo}
                  onChange={this.handlePriceChange}
               />
               <div className='value'>${store.priceTo}</div>
            </div>
            <div>
               Minimum number of tickets<input type="number" id="minTickets" name="minTickets"
                  value={store.minTickets}
                  onChange={this.handleInput} />
            </div>

            <div>range of dates:</div>
         
            <button onClick={this.props.ConcertsStore.search}>search</button>
         </div>)
   }
}
export default SearchBar