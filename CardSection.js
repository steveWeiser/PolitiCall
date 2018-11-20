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
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd', 
        position: 'relative'
    }
}
export default CardSection;