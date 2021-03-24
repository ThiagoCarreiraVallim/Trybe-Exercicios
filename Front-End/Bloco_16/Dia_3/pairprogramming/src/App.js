import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import FormError from './components/formError';
import FormDataDisplay from './components/formDataDispay';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { submitted } = this.props;

    return (
      <main>
        <Form />
        <div className="container">
          <FormError />
        </div>
        { submitted && <FormDataDisplay /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  submitted: state.formReducer.submitted,
});

export default connect(mapStateToProps, null)(App);