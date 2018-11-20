import React, { Component } from 'react';
import { Image, ScrollView, View} from 'react-native';
import RepDetail from './RepDetail';
import axios from 'axios'; 
import BackgroundImage from './BackgroundImage';

// attempt at making a class based component
class RepList extends Component {

    // set our default state of empty reps 
    // state = {
    //     // reps: [], 
    //     googleInfo: [], 
    //     googleLoc: [],
    // };

    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         reps: [], 
    //         googleLoc: [],
    //         googleInfo: [],
    //         StreetAddress: this.props.StreetAddress,
    //         City: this.props.City,
    //         LocalState: this.props.LocalState, 
    //         ZipCode: this.props.ZipCode,

    //     }
    // }
    state = { reps: [], googleInfo: [], googleLoc: [] };

    // rewriting out componentWillMount to use two api calls to gather our results 
    componentWillMount () {

        // this.makeGoogleCall().then((returnVal) => {
        //     this.makePPCall()
        // });

        // this.makeGoogleCall().then((returnVal) => {
        //     this.makePPCall().then((returnValue) => {
        //         this.getPhones()
        //     });
        // });

        this.makeGoogleCall().then((returnVal) => {
            this.getPhones().then((returnValue) => {
                this.makePPCall()
            });
        })
    } 
    
    getPhones() {
        const phoneReq = 'https://www.googleapis.com/civicinfo/v2/representatives?address=10033+Cove+Lake+Dr+Orlando%2C+FL+32836&includeOffices=true&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&fields=officials&key=AIzaSyC1CPGSTnrLx0UsFGuAN_35qdYXlPKyCEk';

        return axios.get(phoneReq, {transformResponse: undefined}).then(response => this.setState({ googleInfo: response.data}));
        // return axios.get(phoneReq, {transformResponse: undefined}).then(response => console.log(response.data));
    }

    // propublica call 
    makePPCall() {

        var header = {
            'Content-Type': 'application/json',
            'X-API-Key': 'KDNMUgMhKjpCYBUiTj6nV6eO3IugCr7OIBUk6kSP'
        };
        
        // adds senators to our state 
        axios.get('https://api.propublica.org/congress/v1/members/senate/' + this.state.googleLoc.state + '/current.json',{headers: header}).then(response => this.setState({ reps: response.data.results }));

        // adds representative to our state 
        axios.get('https://api.propublica.org/congress/v1/members/house/' + this.state.googleLoc.state + '/' + this.state.googleLoc.cd + '/current.json', {headers: header}).then(response => this.setState({ reps: this.state.reps.concat(response.data.results) }));
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
            this.setState({googleLoc:{state:str.match(/state:(\w{2,3})/)[1],
            cd:str.match(/cd:(\d{2,3})/)[1]    
            }})
        });
    }

    renderReps() {
        const { phone } = this.state.googleInfo;
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
            <View style={{ flex:1, backgroundColor: 'transparent' }}>
                <View>
                    <BackgroundImage />
                </View>
                <ScrollView>
                    {this.renderReps()}
                </ScrollView>
            </View>
        );
    }
}

export default RepList;