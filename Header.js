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
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 60, // pixel value 
        paddingTop: 15, // padding to top of element
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, // dimensions of shadow 
        //              nothing on left or right, but we want it on the bottom
        shadowOpacity: 0.1,  // how heavy is it, usually between 0 and 1
        elevation: 2, 
        position: 'relative'
    },
    headerTextStyle1: 
    {
        fontSize: 20,
        color: '#0015BC'
    },
    headerTextStyle2:
    {
        fontSize: 20,
        color: '#FF0000'
    }
};

export default Header;