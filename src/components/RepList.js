import React from 'react';
import { ScrollView, Text} from 'react-native';
import RepDetail from './RepDetail';

// this needs to be refactored after API's are up 
// this is a functional component and can't fetch data
const RepList = () => {
    return (
        <ScrollView>
            <RepDetail 
                repName={'Barney Williams'} 
                repParty={'Goofy Goobers'}
                repImage={'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/425912_10151040658500925_824590736_n.jpg?_nc_cat=106&_nc_ht=scontent-mia3-1.xx&oh=d49bb33ac353f503ed41c7e9a5828c73&oe=5C568FCD'}
            />
            <RepDetail 
                repName={'Indian Jones'} 
                repParty={'Goofy Goobers'}
                repImage={'https://www.coupdemainmagazine.com/sites/default/files/styles/full_width/public/article/8846/hero-8846-372122306.jpg?itok=078MizYc'}
            />
            <RepDetail 
                repName={'Stephen Colbert'} 
                repParty={'Goofy Goobers'}
                repImage={'https://upload.wikimedia.org/wikipedia/commons/7/7f/Stephen_Colbert_December_2017.jpg'}
            />

        </ScrollView>
    );
};

export default RepList;