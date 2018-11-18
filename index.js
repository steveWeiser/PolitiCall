import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

// import our header comp 
import Header from './src/components/Header';
//import our list 
import RepList from './src/components/RepList';
import Navbar from './src/components/Navbar';
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText1={'Politi'} headerText2={'Call'}/>
            {/* <RepList/> */}
            <Navbar/>
        </View>
        
    );
};

AppRegistry.registerComponent('PolitiCall', () => App);