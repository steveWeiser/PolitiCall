'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class BackgroundImage extends Component {
    render() {
        return (
          <View style={{ flex:1, backgroundColor: 'transparent' }}>
            <View>
                <Image style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} source={require('../Images/FlagBackground.png')} />
            </View>
          </View>
        );
      }
    };
    
    var styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 19,
        marginBottom: 5,
      },
    });
//   render() {
//     const resizeMode = 'center';
//     const text = 'I am some centered text';

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#eee',
//         }}
//       >
//         <View
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <Image
//             style={{
//               flex: 1,
//               resizeMode,
//             }}
//             source={require('../Images/FlagBackground.png')}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             justifyContent: 'center',
//           }}
//         >
//           <Text
//             style={{
//               textAlign: 'center',
//               fontSize: 40,
//             }}
//           >
//             {text}
//           </Text>
//         </View>
//       </View>
//     );
//   }
//}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
