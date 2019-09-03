import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar/index';
import { Provider } from 'react-redux';
import store from './store'
import Player from './components/Player/index';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopNavbar/>
        <Player/>
      </div>
    </Provider>
  );
}

export default App;
