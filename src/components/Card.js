import React from 'react';
import { View } from 'react-native'; 

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardStyle: 
    {
        borderWidth: 1, // pixel width 1 
        borderRadius: 2, // at any corners, round it nicely 
        borderColor: '#ddd', // light grey
        borderBottomWidth: 0, // for the bottom we want no width, hide the border 
        shadowColor: '#000', // now we wanna give elevation or shadow 
        shadowOffset: { width: 0, height: 2 }, // what side we want shadow on, want only bottom 
        shadowOpacity: 0.1, // give darkness 
        shadowRadius: 2, // just like border radius, rounded shadow corners
        elevation: 1, // ignore till later 
        marginLeft: 5, // screen of device
        marginRight: 5, // screen of device
        marginTop: 10, // place spacing between components between components 
    }
};

export default Card;