import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';
import { red } from 'ansi-colors';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../../Images/Politicall.png')} 
                    />

                    <Text style={styles.title}>Enter your zipcode below, This will determine your representatives</Text>
            </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        //height: 100
        //position: 'absolute',
        //top: 0,
        //left: 0,
        //bottom: 0,
        //right: 0,
    },
    title: {
        //color: '#FFF',
        color: 'white',
        marginTop: 20,
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: 'bold',
        fontFamily: "Avenir Next",
        fontSize: 20,
    }
    
});