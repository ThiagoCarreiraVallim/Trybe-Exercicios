import React from 'react';

class Option extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <option value={state}>{state}</option>
    );
  }
}

export default Option;