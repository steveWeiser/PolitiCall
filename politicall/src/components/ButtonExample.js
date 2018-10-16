//Example of how to create a button
//Brendon Lyra
//Also need to call this file from App.js
//and change App.css for styling this button.

import React, { Component } from 'react';

//creating class that will hold the button.
//needs to extend Component.
//export default will allow other files to use this.
export default class ExampleButton extends Component {

    //this will allow this button to hold variables
    //these variables are called states.
    constructor(props) {
        super(props);
        this.state = {
            //this is where variables will go
            exampleVariable: true
        };
    }

    //here is where functions related to buttons will go.
    exampleHandleClick = () => {
        console.log("Example Button Clicked")
    }

    //functions can be anything valid in js.
    //be sure to write function with = () => as above.
    //it is for improved performance.

    //what will be placed on screen
    render () {
        return (
            <div>
                {/*be sure to have className here. Needed for css*/}
                <button className="ExampleButton" onClick={this.exampleHandleClick}>
                buttonNameHere {/*any js code needs to be inside curly brackets. Comments too*/}
                </button>
            </div>
        );
    }
}

