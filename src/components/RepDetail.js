import React from 'react';
import { Text, View } from'react-native';
import Card from './Card';

const RepDetail = (props) => {
    return (
        <Card>
            <View>
                <Text>{props.repName}</Text>
            </View>
        </Card>
    );
};

export default RepDetail;