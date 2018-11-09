import React from 'react';
import PoliticianCard from '../Components/PoliticianCard'

const PoliticianCardContainer = (props) => {
    return (
        <div className = "PoliticianCardContainer">
            <PoliticianCard
                name = "Bill Nelson"
                id = "N000032"
                party = "Democrat"
                state = "FL" >
          </PoliticianCard>
          <PoliticianCard
            name = "Marco Rubio"
            id = "R000595"
            party = "Republican"
            state = "FL" >
          </PoliticianCard>
        </div>
    );
}

export default PoliticianCardContainer;