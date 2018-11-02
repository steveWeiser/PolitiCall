import React, { Component } from 'react';

export default class PoliticianCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.FirstName,
            lastName: this.props.LastName,
            party: this.props.Party,
            stateAbbr: this.props.StateAbbr
        }
    }

    render() {

        return(
            <div className="PoliticianCard">
                <div>Name: {this.state.firstName} {this.state.lastName}</div>
                <div>Political party: {this.state.party}</div>
                <div>state: {this.state.stateAbbr}</div>
            </div>
        );
    }
}

