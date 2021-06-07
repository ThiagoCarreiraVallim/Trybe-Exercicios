import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClientsCard from './ClientsCard';

class Registered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      clientsSort: []
    }
    this.orderClients = this.orderClients.bind(this);
  }

  orderClients() {
    const { clients } = this.props
    const sorted = [...clients].sort((a, b) => a.name > b.name ? 1 : (b.name > a.name) ? -1 : 0 )
    const every = clients.every((client, index) => client.name === sorted[index].name);
    if (every) {
      this.setState({
        sorted: false
      });
    }else {
      this.setState({
        sorted: true,
        clientsSort: sorted
      });
    }
    return sorted;
  }

  render() {
    const { login, sorted, clientsSort } = this.props;
    let { clients } = this.props;
    if(sorted) clients = clientsSort
    if (!login) {
      window.alert('Faça o login para ter acesso a esta pagina')
      return <Redirect to="/login" />
    }
    return(
      <div>
        <h1>Clientes registrados</h1>
        <Link to="/register"><h3>Cadastrar clientes</h3></Link>
        <button onClick={ this.orderClients }>ordenar</button>
        { clients.length < 1 ? <h4>Nenhum cliente cadastrado</h4> : clients.map(
          (client) => <ClientsCard client={ client } />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clients: state.addClientReducer.clients,
});

export default connect(mapStateToProps, null)(Registered);