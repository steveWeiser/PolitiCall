import React from 'react';
import { ScrollView, Text} from 'react-native';
import RepDetail from './RepDetail';

// this needs to be refactored after API's are up 
// this is a functional component and can't fetch data
const RepList = () => {
    return (
        <ScrollView>
            <RepDetail repName={'Barney Williams'} />
            <RepDetail repName={'Indian Jones'} />
            <RepDetail repName={'Stephen Colbert'} />

        </ScrollView>
    );
};

export default RepList;