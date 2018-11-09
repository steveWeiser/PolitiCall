import React from 'react';
import PoliticianCardContainer from '../Containers/PoliticianCardContainer'
import SelectedRepContainer from '../Containers/SelectedRepContainer'

const FatContainer = (props) => {
    return (
        <div className = "FatContainer">
            <PoliticianCardContainer></PoliticianCardContainer>
            <SelectedRepContainer></SelectedRepContainer>
        </div>
    );
}

export default FatContainer;