import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import './SearchBar.css'

@inject("ConcertsStore")
@observer
class SearchBar extends Component {

   handleInput=(e)=>{
      // console.log(e.target.value)
      // console.log(e.target.name)
      this.props.ConcertsStore.handleInput(e.target.name,e.target.value)
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
                        onChange={this.handleInput}/>
            </div>
            <div>
               City<input type="text" id="city" name="city" placeholder="Enter city.." 
                value={store.city}
                onChange={this.handleInput}/>
            </div>
            <div>
               Minimum number of tickets<input type="number" id="minTickets" name="minTickets" 
                value={store.minTickets}
                onChange={this.handleInput}/>
            </div>
            <div>
               prices <input type="range" min="1" max="100" value="50"
                value={store.artist}
                onChange={this.handleInput}/> 
            </div>
            <div>range of dates:</div>
            <button onClick={this.props.ConcertsStore.search}>search</button>
         </div>)
   }
}
export default SearchBar