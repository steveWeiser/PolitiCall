import React, { Component } from 'react';
import politicallLogo from '../Pictures/Politicall_logo.png';

//Won't use props for logo, so just ignore props here.
export default class PoliticallLogo extends Component {

    render() {

        return (
            <div>
                <img className="PoliticallLogo" src={politicallLogo} alt={'Politicall logo loading error.'}></img>
            </div>
        );
    }
}