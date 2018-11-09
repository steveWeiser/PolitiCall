import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {zipInput: ''}
        this.state = {stateInput: ''}
        this.state = {cityInput: ''}
        this.state = {streetInput: ''}
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                placeholder="Street Address"
                //placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onChangeText={(streetInput) => this.setState({streetInput})}
                onSubmitEditing={() => this.cityInput.focus()}
                style={styles.input}
                />

                <TextInput 
                placeholder="City"
                //placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                ref={(input) => this.cityInput = input}
                onChangeText={(cityInput) => this.setState({cityInput})}
                onSubmitEditing={() => this.stateInput.focus()}
                style={styles.input}
                />

                <TextInput 
                placeholder="State"
                //placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                ref={(input) => this.stateInput = input}
                onChangeText={(stateInput) => this.setState({stateInput})}
                onSubmitEditing={() => this.zipInput.focus()}
                style={styles.input}
                />

                <TextInput 
                placeholder="Zip Code"
                //placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                keyboardType="numeric"
                ref={(input) => this.zipInput = input}
                onChangeText={(zipInput) => this.setState({zipInput})}
                value={this.state.zipInput}
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
        marginBottom: 15,
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