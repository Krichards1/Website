import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Players extends Component {
    state = {};

    constructor (props) {
        super(props);
        
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <p>Add Some Text</p>
        );
    }
}


export default (Players)