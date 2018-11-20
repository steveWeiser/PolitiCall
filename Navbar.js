import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import RepList from './RepList';
class HomeScreen extends React.Component {
  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>Home</Text>
      // </View>
        <RepList/>
    );
  }
}

class BillScreen extends React.Component {
  render() {
    return (
      <View style={styles.navBarView}>
        <Text>Bills</Text>
      </View>
    );
  }
}

class LocationScreen extends React.Component {
  render() {
    return (
      <View style={styles.navBarView}>
        <Text>Location</Text>
      </View>
    );
  }
}

const styles = {
  navBarView:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default createBottomTabNavigator(
  {
      Home: HomeScreen,
      Bills: BillScreen,
      Location: LocationScreen,
  },
);