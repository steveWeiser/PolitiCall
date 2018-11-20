import React from 'react'; 
import { Text, View } from 'react-native'; 

const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle1}>{props.headerText1}<Text style={styles.headerTextStyle2}>{props.headerText2}</Text></Text>
        </View>
        
    );
};

const styles = {
    headerStyle:
    {
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 55, // pixel value
        //shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, // dimensions of shadow 
        //              nothing on left or right, but we want it on the bottom
        shadowOpacity: 0,  // how heavy is it, usually between 0 and 1
        elevation: 2, 
        position: 'relative',
    },
    headerTextStyle1: 
    {
        fontSize: 25,
        color: '#0015BC',
        letterSpacing: 2.5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    headerTextStyle2:
    {
        fontSize: 25,
        color: '#FF0000',
        letterSpacing: 2.5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
};

export default Header;