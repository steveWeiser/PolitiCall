import React, { Component } from 'react';
import {IoMdOptions, IoMdMenu} from 'react-icons/io';
import NavMenuItem from './NavMenuItem';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LeftMargin: '0px',
            Clicked: false,
            sideMenuVisbility: 'hidden'

        };
    }

    HandleMenuClick = (event) => {
        if (this.state.Clicked === false ){
            this.setState({LeftMargin: '135px', Clicked: true, sideMenuVisbility:'visible'})
        }
        else {
            this.setState({LeftMargin: '0%', Clicked: false, sideMenuVisbility:'hidden'})
        }

    }

    //click anywhere in main div will close the side bar.
    HandleDivClick = (event) => {
        if (this.state.Clicked === true){
            this.setState({Clicked:false, LeftMargin: '0px', sideMenuVisbility:'hidden'})
        }
    }

    //filter button clicked
    HandleFilterClick = (event) => {

    }


    

    render(){

            const sideMenu= (
                <div style={{marginTop:'12px', borderRight: '1px solid grey', visibility: this.state.sideMenuVisbility, display: 'flex', flexDirection:'column'}}>
                    <NavMenuItem className="NavMenuItem" ItemName="Representatives"></NavMenuItem>
                    <NavMenuItem className="NavMenuItem" ItemName="Bills"></NavMenuItem>
                    <NavMenuItem className="NavMenuItem" ItemName="Map"></NavMenuItem>
                    <NavMenuItem className="NavMenuItem" ItemName="Committees"></NavMenuItem>
                    <NavMenuItem className="NavMenuItem" ItemName="Settings"></NavMenuItem>

                </div>
            );


        return(

            

            <div style={{ height: "100%", width: "100%" }}>

                <div style={{ position: "absolute" }}>
                    {sideMenu}
                </div>
                    <div onClick={this.HandleDivClick} style={{ marginLeft: this.state.LeftMargin, flexDirection: 'row', alignItems: 'center', height: "100vh", width: "100vw", justifyContent: "center", justifyItems: "center", position: "absolute" }}>
                        <IoMdMenu className="Menu" onClick={this.HandleMenuClick} id="Menu" style={{ cursor: 'pointer', marginTop: '5px' }} size="40"></IoMdMenu>
                        <input placeholder="Search Rep Here" style={{ marginLeft: '20%', width: '30%', maxWidth: '250px', borderRadius: '10px', borderWidth: '1px', paddingLeft: '10px', paddingRight: '10px', outlineWidth: '0', top: "50%", height: '25px' }}></input>
                        <IoMdOptions style={{ marginLeft: '20%', cursor: 'pointer' }} size="30" onClick={this.HandleFilterClick}></IoMdOptions>
                        <hr></hr>
                    </div>
            </div>
        );
    }
}