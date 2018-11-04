import React, { Component } from 'react';
import PoliticianCard from '../components/PoliticianCard';
import RonaldRaegan from '../Pictures/RonaldRaegan.jpg';

export default class PoliticiansList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repsList: [
                { key: 1, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL", PoliticianImage: RonaldRaegan },
                { key: 2, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL", PoliticianImage: RonaldRaegan },
                { key: 3, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL", PoliticianImage: RonaldRaegan },
                { key: 4, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL", PoliticianImage: RonaldRaegan },
                { key: 5, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL", PoliticianImage: RonaldRaegan }
            ]
        };
    }



    render() {

        // var politician = {
        //     firstName: '',
        //     lastName: '',
        //     party: '',
        //     stateAbbr: ''
        // };

        //let reps = null;

        const reps = (
                this.state.repsList.map(pol =>
                    <PoliticianCard key = {pol.key} FirstName={pol.firstName} LastName={pol.lastName} Party={pol.party} StateAbbr={pol.stateAbbr} PoliticianImage={pol.PoliticianImage}/>
                    )
                );

        return (
            <div className="PoliticianCardContainer">
                {reps}
            </div>
        );
    }
}