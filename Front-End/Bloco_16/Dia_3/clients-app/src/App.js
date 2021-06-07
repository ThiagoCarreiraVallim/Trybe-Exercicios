import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Registered from './components/Registered';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/registered" component={ Registered } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
