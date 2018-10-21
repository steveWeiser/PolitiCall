import React from 'react';
import { Text, View, Image } from'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const RepDetail = (props) => {

    // we destructure here becuase we had props.record.(something) over 
    // and over so we make it nice and clean 
    const { repName, repParty, repImage } = props;


    return (
        <Card>
            <CardSection>
                {/* Image of your Rep */}
                <View style={styles.imageContainerStyle}>
                    <Image
                        syle={styles.repImageStyle}
                        source={{uri: repImage}}
                    />
                </View>

                {/* Name of Rep & party */}
                <View style={styles.repInfoStyle}>
                    <Text style={styles.repNameStyle}>{repName}</Text>
                    <Text>{repParty}</Text>
                </View>

                <CardSection>
                    <Button>
                        Call
                    </Button>
                </CardSection>
            </CardSection>
        </Card>
    );
};

const styles ={
    repImageStyle:
    {
        height: 50, 
        width: 50
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