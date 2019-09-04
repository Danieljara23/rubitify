import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar/index';
import { Provider } from 'react-redux';
import store from './store'
import Player from './components/Player/index';
import { Route, BrowserRouter as  Router, Switch } from "react-router-dom";
import Artists from './components/Artists';
import Home from './components/Home';
import Genres from './components/Genres';
import Albums from './components/Albums';
import Songs from './components/Songs';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <TopNavbar/>
          <Player/>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/artists" component={Artists} />
                <Route path="/genres" component={Genres} />
                <Route path="/artists/:id/albums" component={Albums} />
                <Route exact path="/albums/:id/songs" component={Songs} />
              </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
