import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardSectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardSectionStyle: {
        borderBottomWidth: 1, // seperates card sections
        padding: 5, // spacing between section and its border 
        backgroundColor: '#fff', 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd', 
        position: 'relative'
    }
}
export default CardSection;