import React, { Component } from 'react';
import { connect } from 'react-redux';
import { errorAction } from '../redux/actions/errorAction';
import { handler } from '../redux/actions/handlerAction';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
  }

  onBlurHandler = ({ name, value }) => {
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    const { changeHandler } = this.props;
    changeHandler(name, value);
  }

  handleEmail(event) {
    const { changeHandler, emailHandler } = this.props;
    changeHandler(event);
    emailHandler(event);
  }

  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;
    return (
      <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                onChange={ this.handleEmail }
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={currentState.city}
                onBlur={onBlurHandler}
                onChange={changeHandler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                onChange={changeHandler}
                defaultValue=""
              >
                <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={changeHandler}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={changeHandler}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currentState: state.handlerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeHandler: ({ target }) => dispatch(handler(target.name, target.value)),
  emailHandler: ({ target }) => dispatch(errorAction(target.name, target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
