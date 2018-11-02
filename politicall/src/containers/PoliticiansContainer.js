import React, { Component } from 'react';
import PoliticianCard from '../components/PoliticianCard';



export default class PoliticiansList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repsList: [
                { key: 1, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL" },
                { key: 2, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL" },
                { key: 3, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL" },
                { key: 4, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL" },
                { key: 5, firstName: 'bob', lastName: 'shewt', party: 'meh', stateAbbr: "FL" }
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
                    <PoliticianCard key = {pol.key} FirstName={pol.firstName} LastName={pol.lastName} Party={pol.party} StateAbbr={pol.stateAbbr}/>
                    )
                );

        return (
            <div className="PoliticianCardContainer">
                {reps}
            </div>
        );
    }
}