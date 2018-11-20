import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 

/* added onPress prop for all Button components. */
const Button = ({ children, onPress }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = 
{
    textStyle: 
    {
        alignSelf: 'center', // align center within the button
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600', // the thinness of the text, very bold
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1, //fill as much content as possible
        alignSelf: 'stretch', // tied to flexbox. position itself using flexbox rules, 
        //stretch to fill limits
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margenLeft: 5,
        marginRight: 5
    }
};
export default Button;