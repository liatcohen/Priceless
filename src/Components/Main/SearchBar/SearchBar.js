import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './SearchBar.css'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import DatePicker from './DatePicker'
const moment = require('moment')
// const slider = require('react-rangeslider')

@inject("ConcertsStore")
@observer
class SearchBar extends Component {
  
   handleInput = (e) => {
      this.props.ConcertsStore.handleInput(e.target.name, e.target.value)
   }

   handlePriceChange = (value) => {
      this.props.ConcertsStore.handleInput('priceTo', value)
   }

   handleDateChange = (range)=>{
      this.props.ConcertsStore.handleInput("dateFrom", moment(range.from).format('YYYY-MM-DD  00:00:00'))
      this.props.ConcertsStore.handleInput("dateTo", moment(range.to).format('YYYY-MM-DD  23:59:59') )

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
               number of tickets<input type="number" id="minTickets" name="minTickets" min="1"
                  value={store.minTickets}
                  onChange={this.handleInput} />
            </div>

            <div>range of dates:


               <DatePicker handleDateChange={this.handleDateChange}/>
            </div>
         
            <button onClick={this.props.ConcertsStore.search}>search</button>
         </div>)
   }
}
export default SearchBar