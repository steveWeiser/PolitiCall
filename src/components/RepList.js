import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RepDetail from './RepDetail';
import axios from 'axios';

// this is class based because it needs to make an https request 
class RepList extends Component {
    // set our default state of empty reps 
    state = { reps : [], googleInfo: [] }; 

    // will execute as soon as its rendered to the screen 
    componentWillMount () {

        this.makeGoogleCall().then((returnVal) => {
            this.makePPCall()
        });
        
    }

    // propublica call 
    makePPCall() {
        var header = {
            'Content-Type': 'application/json',
            'X-API-Key': 'KDNMUgMhKjpCYBUiTj6nV6eO3IugCr7OIBUk6kSP'
        };
        
        // adds senators to our state 
        axios.get('https://api.propublica.org/congress/v1/members/senate/' + this.state.googleInfo.state + '/current.json',{headers: header}).then(response => this.setState({ reps: response.data.results }));

        // adds representative to our state 
        // this.setState({ reps: [this.state.reps, [response.data]
        axios.get('https://api.propublica.org/congress/v1/members/house/' + this.state.googleInfo.state + '/' + this.state.googleInfo.cd + '/current.json', {headers: header}).then(response => this.setState({ reps: this.state.reps.concat(response.data.results) }));
        // axios.get('https://api.propublica.org/congress/v1/members/house/' + this.state.googleInfo.state + '/' + this.state.googleInfo.cd + '/current.json', {headers: header}).then(response => console.log(response.data));
        // console.log(this.state.reps)
    }

    // google call to grab our state and cd fields
    makeGoogleCall () {
        // refactor this to make the string a dynamically passed in value
        const request = 'https://www.googleapis.com/civicinfo/v2/representatives?address=10033+Cove+Lake+Dr+Orlando%2C+FL+32836&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&fields=divisions&key=AIzaSyC1CPGSTnrLx0UsFGuAN_35qdYXlPKyCEk';

        return axios.get(request, {transformResponse: undefined}).then( (response) => {
            str = JSON.stringify(response.data)
            this.setState({googleInfo:{state:str.match(/state:(\w{2,3})/)[1],
            cd:str.match(/cd:(\d{2,3})/)[1]    
            }})
        });
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