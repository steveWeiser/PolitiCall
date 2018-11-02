import React, { Component } from 'react';
import './App.css';
import ZipCodeScreen from './containers/ZipCodeContainer'
//import MainScreen from './containers/MainScreen'
import PoliticiansContainer from './containers/PoliticiansContainer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Info for displaying 
      ShowZipCodeScreen: true,
      zipcode: '',
      ShowMainScreen: false
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
