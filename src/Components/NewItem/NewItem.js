import React, { Component } from 'react'

class NewItem extends Component {

   render() {
      return (
         <div>
            NewItem
            <div className="NewItem">
               <div><input name="Artist" type="text" placeholder="Artist" /></div>
               <div> <input name="Date" type="Date" placeholder="Date" /></div>
               <div>  <input name="Hour" type="Hour" placeholder="Hour" /></div>
               <div>  <input name="Country" type="text" placeholder="Country" /></div>
               <div>  <input name="City" type="text" placeholder="City" /></div>
               <div>  <input name="Asked price" type="Number" placeholder="Asked price" /></div>
               <div>  <input name="Original price" type="Number" placeholder="Original price" /></div>
               <div>  <input name="Additional info" type="text" placeholder="Additional info" /></div>
               <div>  <input name="Num of tickets" type="number" placeholder="Num of tickets" /></div>

            </div>
         </div>)
   }
}
export default NewItem