import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return(
            <View style={styles.container}>
             <TextInput 
                placeholder="Zip Code"
                //placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>DONE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:  {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 25,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 125,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
});