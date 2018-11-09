import React, { Component } from 'react';
import { ScrollView, Text} from 'react-native';
import RepDetail from './RepDetail';
import axios from 'axios'; 

// attempt at making a class based component
class RepList extends Component {

    // set our default state of empty reps 
    state = { reps: [], googleInfo: [] };

    // rewriting out componentWillMount to use two api calls to gather our results 
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
        axios.get('https://api.propublica.org/congress/v1/members/house/' + this.state.googleInfo.state + '/' + this.state.googleInfo.cd + '/current.json', {headers: header}).then(response => this.setState({ reps: this.state.reps.concat(response.data.results) }));
    }

    // google call to grab our state and cd fields
    makeGoogleCall () {
        // refactor this to make the string a dynamically passed in value

        // original raw address for formatting 
        // 10033+Cove+Lake+Dr+Orlando%2C+FL+32836 
        // var address = <the prop being passed in> 
        // var key = AIzaSyC1CPGSTnrLx0UsFGuAN_35qdYXlPKyCEk
        // const request = 'https://www.googleapis.com/civicinfo/v2/representatives?address=' + address + '&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&fields=divisions&key=AIzaSyC1CPGSTnrLx0UsFGuAN_35qdYXlPKyCEk';
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
        // pass in fat arrow function, that is called for each album 
        // what is returned is put into a new array 
        // album.title is a js variable within JSX so you need curly braces 
        return this.state.reps.map(rep => 
            // we dont need this anymore cuz we wanna display into albumdetail
            // <Text key={album.title}>{album.title}</Text>
            // best property to use is to use an ID 
            // we want a prop of 'album' to be passed into each albumdetail component 
            // prop name = record 
            // variable name = album
            <RepDetail key={rep.id} record={rep} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderReps()}
            </ScrollView>
        );
    }
}


export default RepList;