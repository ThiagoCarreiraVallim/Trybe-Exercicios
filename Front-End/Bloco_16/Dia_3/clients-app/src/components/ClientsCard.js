import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeClient } from '../Redux/Actions/removeAction';

class ClientsCard extends Component {
  render() {
    const { client, removeClient } = this.props;
    return (
       <div>
         <h2>{ client.name }</h2>
         <p>{ client.age }</p>
         <span>{ client.email }</span>
         <button onClick={ () => removeClient(client.name) }>X</button>
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeClient: (name) => dispatch(removeClient(name)),
});

export default connect(null, mapDispatchToProps)(ClientsCard);