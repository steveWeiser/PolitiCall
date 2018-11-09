import React from 'react';

const PoliticianCard = (props) => {
    return (
        <div className = "PoliticianCard">
            <img className = "PoliticianCardImage"
                src={'https://theunitedstates.io/images/congress/225x275/' + props.id + '.jpg'} >
            </img>
            <div className = "PoliticianCardText" >
            <div style={{fontWeight: "bold"}}>
                {props.name} 
            </div>
            </div>
            <div className = "PoliticianCardText" >
                Party Afffiliation: {props.party}
            </div>
            <div classname = "PoliticianCardText" >
                State: {props.state}
            </div>
        </div>
    );
}

export default PoliticianCard;