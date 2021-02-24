import React from 'react';
import './App.css'

class Section extends React.Component {
  render() {
    return <section className='pokes'>
      <h3>{ this.props.poke.name }</h3>
      <span className='tipe'>{ this.props.poke.type }</span> <br></br>
      <span className='weight'>Average weight { this.props.poke.averageWeight.value } { this.props.poke.averageWeight.measurementUnit }</span>
      <img src={ this.props.poke.image } ></img>
    </section>
  }
}

export default Section