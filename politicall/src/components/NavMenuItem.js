import React, { Component } from 'react';

export default class NavMenuItem extends Component {
    constructor(props){
        super(props);
        this.state ={

        };
    }


    render() {
        return(
            <button style={{marginTop:'30px', marginRight:'10px', background: 'none', border:'none', cursor:'pointer', fontSize:'45', textAlign:'left', marginLeft:'5px'}}>
                {this.props.ItemName}
            </button>
        );
    }
}
