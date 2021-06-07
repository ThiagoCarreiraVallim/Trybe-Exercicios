import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <h3>Entre na sua conta para ter acesso as pessoas cadastradas</h3>
        <Link to="/login">Fazer login</Link>
      </div>
    );
  }
}

export default Home;
