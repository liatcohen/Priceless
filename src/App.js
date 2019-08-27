import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import  Navbar  from './Components/Navbar/Navbar'
import Main from './Components/Main/Main';
import NewItem from './Components/NewItem/NewItem';
import Concerts from './Components/Main/Concerts/Concerts';
import ConcertBox from './Components/Main/ConcertBox/ConcertBox';
import ConcertPage from './Components/ConcertPage/ConcertPage';
import SearchBar from './Components/Main/SearchBar/SearchBar';

@observer
class App extends Component {
   render() {

      return (
         <div className="App">
            <Navbar />
            <Main />
            <NewItem />
            <Concerts />
            <ConcertBox />
            <ConcertPage />
            <SearchBar />
         </div>
      );
   }
}
export default App;
