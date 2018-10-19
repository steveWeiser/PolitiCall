import React from 'react';
import { Text, View } from'react-native';

const RepDetail = (props) => {
    return (
        <View>
            <Text>{props.repName}</Text>
        </View>
    );
};

export default RepDetail;