import React from 'react';

const SelectedRep = (props) => {
    return (
        <div className = "SelectedRepContainer">
            <img className = "SelectedRepImage"
                src={'https://theunitedstates.io/images/congress/225x275/' + props.id + '.jpg'} >
            </img>
        </div>
    );
}

export default SelectedRep;