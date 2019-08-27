import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject("ConcertStore")
@observer
class ConcertPage extends Component {

   componentDidMount(){
      this.props.ConcertStore.getConcert(this.props.match.params.id)
   }
   render() {

      return (
         <div>

        </div>)
   }
}
export default ConcertPage