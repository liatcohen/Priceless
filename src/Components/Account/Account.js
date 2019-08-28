import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './Account.css'
const moment = require('moment')

@inject("UserStore")
@observer
class Account extends Component {

    componentDidMount() {
    }
    render() {

        return (
            <div className="account">
                <div className="user-info">
                    <div>Hello {this.props.UserStore.user.name.split(" ")[0]}!</div>
                    <div>Full name: {this.props.UserStore.user.name}</div>
                    <div>Phone number: {this.props.UserStore.user.phone_number}</div>
                    <div>Email: {this.props.UserStore.user.email}</div>
                </div>
                <div className="user-concerts">Your concerts
                {/* <div>{this.props.UserStore.user.favorite}</div> */}

                </div>


            </div>)
    }
}
export default Account