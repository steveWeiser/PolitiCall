import React, { Component } from 'react';
import {IoMdOptions, IoMdMenu} from 'react-icons/io';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LeftMargin: '0px',
            Clicked: false
        };
    }

    HandleMenuClick = (event) => {
        if (this.state.Clicked === false ){
            this.setState({LeftMargin: '40%', Clicked: true})
        }
        else {
            this.setState({LeftMargin: '0px', Clicked: false})
        }

    }

    HandleDivClivk = (event) => {
        if (this.state.Clicked === true){
            this.setState({Clicked:false, LeftMargin: '0px'})
        }
    }

    render(){

        return(
            <div onClick={this.HandleDivClivk} style={{marginLeft: this.state.LeftMargin, flexDirection: 'row', alignItems: 'center'}}>    
                <IoMdMenu className="Menu" onClick={this.HandleMenuClick} id="Menu" style={{cursor: 'pointer', marginTop: '5px'}} size="40"></IoMdMenu>            
                <input placeholder="Search Rep Here" style={{marginLeft: '20%', width: '30%', height: '22px', maxWidth: '250px', borderRadius: '10px', borderWidth: '1px', paddingLeft: '10px', paddingRight: '10px', outlineWidth: '0'}}></input>            
                <IoMdOptions style={{ marginLeft: '20%', cursor: 'pointer'}} size="30"></IoMdOptions>
                <hr></hr>
            </div>
        );
    }
}