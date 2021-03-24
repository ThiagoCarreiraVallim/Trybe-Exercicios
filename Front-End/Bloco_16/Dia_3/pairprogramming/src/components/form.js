import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAction, sendAction } from '../redux/actions/formAction';
import PersonalForm from './personalForm';
import ProfessionalForm from './professionalForm';

class Form extends Component {
  render() {
    const { sendForm, resetForm } = this.props;
    return (
      <form>
        <PersonalForm />
        <ProfessionalForm />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendForm: () => dispatch(sendAction()),
  resetForm: () => dispatch(resetAction()),
});

export default connect(null, mapDispatchToProps)(Form);
