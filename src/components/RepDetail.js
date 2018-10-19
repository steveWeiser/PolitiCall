import React from 'react';
import { Text, View, Image } from'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RepDetail = (props) => {
    return (
        <Card>
            <CardSection>
                {/* Image of your Rep */}
                <View style={styles.imageContainerStyle}>
                    <Image>
                        
                    </Image>
                </View>

                {/* Name of Rep & party */}
                <View>
                    <Text>{props.repName}</Text>
                    <Text>{props.repParty}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles ={
    repImageStyle:
    {

    },
    imageContainerStyle:
    {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10
    },
    repInfoStyle:
    {
        flexDirection: 'column', 
        justifyContent: 'space-around'
    },
    repNameStyle:
    {
        fontSize: 18
    }
};
export default RepDetail;