import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin, setLogin } from '../Redux/Actions/loginAction';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      inLogging: false
    }
    this.susses = this.susses.bind(this);
  }

  susses() {
    setTimeout(() => this.setState({ inLogging: true }), 600);
    return <h2>Login efetuado com sucesso</h2>
  }

  render() {
    const { login, handleLogin, setLogin } = this.props;
    const { inLogging } = this.state;
    if(login){
      return inLogging ? <Redirect to="/registered"/> : this.susses()
    }

    return(
      <div>
        <h2>Faça seu login</h2>
        <form>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={ handleLogin }
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="password"
              onChange={ handleLogin }
            />
          </label>
        <button
          type="button"
          onClick={ setLogin }
        >Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: () => dispatch(setLogin()),
  handleLogin: ({ target }) => dispatch(handleLogin(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
