import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RepDetail from './RepDetail';
import axios from 'axios';

// this is class based because it needs to make an https request 
class RepList extends Component {
    // set our default state of empty reps 
    state = { reps : [] }; 

    // will execute as soon as its rendered to the screen 
    componentWillMount () {
        var header = {
            'Content-Type': 'application/json',
            'X-API-Key': 'KDNMUgMhKjpCYBUiTj6nV6eO3IugCr7OIBUk6kSP'
        };
        axios.get('https://api.propublica.org/congress/v1/members/senate/FL/current.json',{headers: header}).then(response => this.setState({ reps: response.data.results }));
    }

    renderReps() {
        // map is an array helper 
        // pass in fat arrow function, that is called for each rep 
        // what is returned is put into a new array 
        // rep.title is a js variable within JSX so you need curly braces 
        return this.state.reps.map(rep => 
            // best property to use is to use an ID 
            // we want a prop of 'rep' to be passed into each repdetail component 
            // prop name = record 
            // variable name = rep
            <RepDetail key={rep.id} record={rep} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderReps()}
                {/* <Text>{JSON.stringify(this.state)}</Text> */}
            </ScrollView>
        );
    }
}
export default RepList;