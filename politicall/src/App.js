import React, { Component } from 'react';
import './App.css';
import ZipCodeScreen from './containers/ZipCodeContainer'
//import MainScreen from './containers/MainScreen'
import PoliticiansContainer from './containers/PoliticiansContainer'
import NavBar from '../src/components/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Info for displaying 
      ShowZipCodeScreen: false,
      ShowMainScreen: false,
      zipcode: '',
      NavBarTestScreen: true
      
    }
  }

  changeFromZipToMainScreen = (zipCodeNum) => {
    this.setState({ShowZipCodeScreen: false, ShowMainScreen: true, zipcode: zipCodeNum});
  }


  render() {

    //show zip code screen.
    if (this.state.ShowZipCodeScreen === true) {
      return (
        <div>
          <ZipCodeScreen changeScreen={this.changeFromZipToMainScreen}></ZipCodeScreen>
        </div>
      )
    }

    if (this.state.ShowMainScreen === true) {
      return (
        <div>
          {/*<MainScreen></MainScreen>*/}
          <PoliticiansContainer></PoliticiansContainer>
        </div>
      )
    }

    if (this.state.NavBarTestScreen === true) {
      return (
        <div>
          <NavBar></NavBar>
        </div>
      )
    }

    //none of the pages that were supposed to load, loaded correctly.
    else {
      return (
        <div>
          <text>Error Loading pages</text>
        </div>
      );
    }
  }
}

export default App;
