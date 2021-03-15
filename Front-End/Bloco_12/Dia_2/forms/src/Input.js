import React from 'react';

class Input extends React.Component {

  render() {
    const { type, upperCase, maxLength, pattern, blur } = this.props;
    return (
      <input
      type={type}
      name={type}
      maxLength={maxLength}
      style={{textTransform: upperCase}}
      pattern={ pattern }
      onBlur={ blur }
      required
      />
    );
  }
}

export default Input;