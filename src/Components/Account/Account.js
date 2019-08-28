import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './Account.css'
const moment = require('moment')

@inject("ConcertStore")
@observer
class Account extends Component {

   componentDidMount() {
   }
   render() {

      return (
         <div className="account">
          my account
       

         </div>)
   }
}
export default Account