import React, { Component } from 'react'

class ConcertPage extends Component {
   render() {
      return (
         <div>
            ConcertPage!  
            id: {this.props.match.params.id}
        </div>)
   }
}
export default ConcertPage