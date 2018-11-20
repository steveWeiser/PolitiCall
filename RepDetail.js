import React from 'react';
import { Text, View, Image } from'react-native';
import call from 'react-native-phone-call';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const RepDetail = ({ record }) => {

    // we destructure here becuase we had props.record.(something) over 
    // and over so we make it nice and clean 
    // const { repName, repParty, repImage } = props;
    const id = record.id;
    const photo = 'https://theunitedstates.io/images/congress/225x275/' + id + '.jpg';
    
    function partyString(props){
        if (props.party == 'D'){ 
            return 'Democrat';
        }
        else if (props.party == 'R'){
            return 'Republican';
        }
        else{
            return props.party;
        }
    }

    const party = partyString(record);

    return (
        <Card>
            <CardSection>
                {/* Image of your Rep */}
                <View style={styles.imageContainerStyle}>
                    <Image
                        style={styles.repImageStyle}
                        source={{uri: photo}}
                    />
                </View>
                
                {/* {console.log('yo whats up')}; */}
                {/* Name of Rep & party */}
                <View style={styles.repInfoStyle}>
                    <Text style={styles.repNameStyle}>{record.name}</Text>
                    <Text style={styles.partyStyle}>{party}</Text>
                </View>
            </CardSection>

            {/* Pass onPress function to parent "Button" to be executed on press! */}
            <CardSection>
                <Button onPress={() => call({number: '1234567890', prompt: true}).catch(console.error)}>
                    <Text>
                        Call!
                    </Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles ={
    repImageStyle:
    {
        height: 69, 
        width: 69,
    },
    imageContainerStyle:
    {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10,
    },
    repInfoStyle:
    {
        flexDirection: 'column', 
        justifyContent: 'space-around',
    },
    repNameStyle:
    {
        fontSize: 25,
        fontWeight: 'bold',
    },
    partyStyle:
    {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
};
export default RepDetail;