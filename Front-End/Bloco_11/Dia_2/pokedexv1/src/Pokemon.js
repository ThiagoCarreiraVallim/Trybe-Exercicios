import React from 'react'
import Elements from './CreateElement'
import Data from './Data'
import './App.css'

class PokeList extends React.Component {
  render() {
    return Data.map(pokemon => <Elements poke={ pokemon }/>)
  }
}

export default PokeList