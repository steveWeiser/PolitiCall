import React, { Component } from 'react';
import politicallLogo from '../Pictures/Politicall_logo3.png';
import AmericanFlagBackground from '../Pictures/AmericanFlagBackground2.jpg'

export default class ZipCodeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextEntry: '',
        }

    }

    handleNumbersChange = (event) => {
        const regex = /^[0-9\b]+$/;

        // if value is not blank, then test the regex
        //Only allow digits
        if (event.target.value === '' || regex.test(event.target.value))
            this.setState({ TextEntry: event.target.value })
    }

    handleSubmit = (event) => {

        //send to main page
        //validate zip code, and query results.

        console.log(this.state.TextEntry);
        

    }


    render() {

        return (
            <div className='WholeScreen' style={ {backgroundImage: "url(" + AmericanFlagBackground + ")"}}>
                
                    <div className="ZipCodeScreenContainer">
                        <img className="PoliticallLogo" src={politicallLogo} alt={'Politicall logo loading error.'}></img>
                        <div className="enterZipCodeText">Please enter your zip code so </div>
                        <div>we may find your local representatives</div>
                        <input value={this.state.TextEntry} className="ZipCodeInput " placeholder="Zip Code" onChange={this.handleNumbersChange}></input>
                        <button onClick={this.props.changeScreen} className="submitButton">Submit</button>
                        <div className="SkipText">or <a  href="javascript:void(0)" onClick={this.props.changeScreen} >skip</a> to see all representatives</div>
                    </div> 
            </div>
        );
    }
}