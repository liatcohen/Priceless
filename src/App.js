import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main';
import NewItem from './Components/NewItem/NewItem';
import Concerts from './Components/Main/Concerts/Concerts';
import ConcertBox from './Components/Main/ConcertBox/ConcertBox';
import ConcertPage from './Components/ConcertPage/ConcertPage';
import SearchBar from './Components/Main/SearchBar/SearchBar';
import Favorites from './Components/Main/Favorites/Favorites';

@observer
class App extends Component {
   render() {

      return (
         <Router >
            <div className="App">
               <Navbar />
               <Route exact path="/" render={() => <Main />} />
               {/* <Main /> */}
               <Route exact path="/newitem" render={() => <NewItem />} />
               {/* <NewItem /> */}
               <Route path="/concert/:id" render={({ match }) => <ConcertPage match={match}/>} />
               <Route path="/favorites" render={({  }) => <Favorites/>} />

               {/* <ConcertPage /> */}
            </div>
         </Router>
      );
   }
}
export default App;
