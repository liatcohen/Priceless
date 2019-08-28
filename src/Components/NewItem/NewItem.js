import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './NewItem.css'

@inject("NewConcertStore")
@observer
class NewItem extends Component {
   inputHandler = (e) => {
      this.props.NewConcertStore.handleInput(e.target.name, e.target.value)
   }

   saveConcert = () => {
      this.props.NewConcertStore.saveConcert(this.props.NewConcertStore.newConcert)
   }

   render() {
      const img="https://dressings-sauces.org/wp-content/uploads/2018/10/Crowd-at-concert6.jpg"
      let store = this.props.NewConcertStore.newConcert
      
      return (
         <div>
            <div className="new-item">
               <div class="container">
                  <h2>Add new Concert for sale</h2>
                  <form>

                     <input name="artist" type="text" placeholder="Artist" value={store.artist} onChange={this.inputHandler} />
                     <div id="date-time-input">
                        <input name="date" type="Date" placeholder="Date" value={store.date} onChange={this.inputHandler} />

                        <input name="hour" type="time" placeholder="Hour" value={store.hour} onChange={this.inputHandler} />
                     </div>
                     <div id="location-info">
                        <input name="country" type="text" placeholder="Country" value={store.country} onChange={this.inputHandler} />
                        <input name="city" type="text" placeholder="City" value={store.city} onChange={this.inputHandler} />
                     </div>
                     <input name="venue" type="text" placeholder="Venue" value={store.venue} onChange={this.inputHandler} />
                     <input name="asked_price" type="Number" placeholder="Asked price in $" value={store.asked_price} onChange={this.inputHandler} />
                     <input name="original_price" type="Number" placeholder="Original price in $" value={store.original_price} onChange={this.inputHandler} />
                     <input name="additional_info" type="text" placeholder="Additional info" value={store.additional_info} onChange={this.inputHandler} />
                     <input name="num_of_tickets" type="number" placeholder="Number of tickets" value={store.num_of_tickets} onChange={this.inputHandler} />
                  </form>

                  <button class="" onClick={this.saveConcert}>
                     Add Concert
                  </button>
                  {/* <button class="signin">
                     <span>sign in</span>
                  </button> */}

               </div>
               <div className="image-container">
                  <img src={img}/>
               </div>
            </div>
         </div>)
   }
}
export default NewItem