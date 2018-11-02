import React, { Component } from 'react';

/**
 * Props list to be declared:
 
 * "handlerNum" for what text is allowed in this field (required)

 * "backgroundText" for opaque inside text field (optional)

 * "textClassName" for className to be used by input field (optional)
 */

export default class ZipCodeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextEntry: '',
            Handler: this.props.handlerNum
        }

    }

    //Handler 1
    //any text is allowed
    handleTextChange = (event) => {
        console.log("handler 1");
        this.setState({ TextEntry: event.target.value });
    }

    //Handler 2
    //Only allow numbers to be input.
    handleNumbersChange = (event) => {
        const regex = /^[0-9\b]+$/;

        // if value is not blank, then test the regex
        //Only allow digits
        if (event.target.value === '' || regex.test(event.target.value))
            this.setState({ TextEntry: event.target.value })
    }

    //Handler 3
    //make case for emails.

    //Handler 4
    //make case for phone numbers.


    render() {


        //handle any text (1)
        if (this.state.Handler === "1") {
            return (
                <div>
                    <input placeholder="Zip code" className={this.props.textClassName}
                        type="text"
                        value={this.state.TextEntry}
                        onChange={this.handleTextChange}s
                    ></input>
                </div>
            );
        }

        //handle only numbers (2)
        else if (this.state.Handler === "2") {
            return (
                <div placeholder="Zip code" className='backgroundText'> {this.props.backgroundText}
                    <input className={this.props.textClassName}
                        type="text"
                        value={this.state.TextEntry}
                        onChange={this.handleNumbersChange}
                    >
                    </input>
                </div>
            );
        }

        else {
            return (
                <div>Error loading Text Entry box</div>
            );
        }

    }
}