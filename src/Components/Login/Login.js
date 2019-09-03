import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './login.css'
import image from '../../images/logo3.png'


@inject("UserStore")
@observer
class login extends Component {

    inputHandler = (e) => {
        this.props.UserStore.handleInput(e.target.name, e.target.value)
     }
  
     loginUser =() =>{
        this.props.UserStore.getUser()
     }


    render() {
        return (
            <div>
             <div className="logo"> <img src={image} /> </div>
            <div id="login">
               <input name="email" type="text" placeholder="your email" value={this.props.UserStore.user.email} onChange={this.inputHandler} />
               <input name="password" type="password" placeholder="your password" value={this.props.UserStore.user.password} onChange={this.inputHandler} />
               <div className="loginButton" onClick={this.loginUser}>Login!</div>
            </div>
            </div>
        )
    }
}
export default login