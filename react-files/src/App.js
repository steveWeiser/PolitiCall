import React, { Component } from 'react';
import Header from './Components/Header'
import FatContainer from './Containers/FatContainer'


import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <FatContainer></FatContainer>
      </div>
    );
  }
}

export default App;
