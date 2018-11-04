import React from 'react';
import { Text, View, Image } from'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const RepDetail = ({ record }) => {

    // we destructure here becuase we had props.record.(something) over 
    // and over so we make it nice and clean 
    // const { repName, repParty, repImage } = props;


    return (
        <Card>
            <CardSection>
                {/* right now we dont have an image to work with, so leave commented */}
                {/* Image of your Rep */}
                <View style={styles.imageContainerStyle}>
                    <Image
                        syle={styles.repImageStyle}
                        source={{uri: 'https://theunitedstates.io/images/congress/225x275/' + id + '.jpg'}}
                    />
                </View>

                {/* Name of Rep & party */}
                <View style={styles.repInfoStyle}>
                    <Text style={styles.repNameStyle}>{record.name}</Text>
                    <Text>{repcord.party}</Text>
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