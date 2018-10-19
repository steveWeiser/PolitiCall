import React from 'react';
import { Text, View } from'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RepDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Text>{props.repName}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

export default RepDetail;