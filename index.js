import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

// import our header comp 
import Header from './src/components/Header';
//import our list 
import RepList from './src/components/RepList';
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'PolitiCall'}/>
            <RepList/>
        </View>
        
    );
};

AppRegistry.registerComponent('PolitiCall', () => App);