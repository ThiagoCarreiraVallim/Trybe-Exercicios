import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addClient } from '../Redux/Actions/addCliente';

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: 0,
      email: '',
    }
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { login, sendForm } = this.props;
    if (!login) {
      window.alert('Faça o login para ter acesso a esta pagina')
      return <Redirect to="/login" />
    }
    return(
      <div>
        <h1>Cadastrar cliente</h1>
        <Link to="/registered">Voltar a tela de clientes</Link>
        <form>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              onChange={ this.handleForm }
            />
          </label>
          <label>
            Idade:
            <input
              type="number"
              name="age"
              onChange={ this.handleForm }
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={ this.handleForm }
            />
          </label>
          <button
            type="button"
            onClick={ () => sendForm(this.state) }
          >Cadastrar cliente</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
  sendForm: (values) => dispatch(addClient(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);