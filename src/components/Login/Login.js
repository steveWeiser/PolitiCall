import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { red } from 'ansi-colors';

export default class Login extends Component {
    render() {
        return (
            // <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
           
            <View style={styles.logoContainer}>
                <Image 
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../../Images/PoliticallClear.png')} 
                    />

                    
            </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
               
            </KeyboardAvoidingView>
             // </View> 
        );
    }
}

//this originally went below image
// <Text style={styles.title}>Enter your Adress below, This will determine your representatives</Text>

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
        fontSize: 14,
    }
    
});