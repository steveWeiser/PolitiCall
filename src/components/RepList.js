import React from 'react';
import { ScrollView, Text} from 'react-native';
import RepDetail from './RepDetail';

// this needs to be refactored after API's are up 
// this is a functional component and can't fetch data
const RepList = () => {
    return (
        <ScrollView>
            <RepDetail repName={'Barney Williams'} repParty={'Homies'}/>
            <RepDetail repName={'Indian Jones'} repParty={'Homies'}/>
            <RepDetail repName={'Stephen Colbert'} repParty={'Homies'}/>

        </ScrollView>
    );
};

export default RepList;