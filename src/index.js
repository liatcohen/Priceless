import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'

import { ConcertsStore as concertsStore } from './Stores/ConcertsStore'
import { ConcertStore as concertStore } from './Stores/ConcertStore'
import { UserStore as userStore } from './Stores/UserStore'
import { NewConcertStore as newConcertStore } from './Stores/NewConcertStore'

const stores = { concertsStore, concertStore, userStore, newConcertStore }

ReactDOM.render(<Provider {...stores}> <App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();