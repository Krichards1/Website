import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Player.css';

class Player extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            ...props
        }
    };

    format() {
        return this.props.height + ' | ' + this.props.weight;
    }
    render() {
        return (
            <React.Fragment>
                <div className="player-container" tabIndex='-1'>
                        <Grid container direction="row">
                            <Grid item xs={1}>
                                <div className="handle"></div>
                            </Grid>
                            <Grid item lg={3} sm={4}>
                                <Avatar  style={{height: 90+'px', width: 90+'px'}} alt={this.props.playerName} src={require('../assets/img_avatar.png')}></Avatar>
                            </Grid>
                            <Grid container item alignItems="flex-start" justify="center" direction="column" lg={8} sm={7}>
                                <Typography style={{color: '#44C8F5'}} variant="overline"> {this.props.playerName} </Typography>
                                <Typography variant="caption"> {this.props.position} </Typography>
                                <Typography variant="caption"> {this.format()} </Typography>
                            </Grid>
                        </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Player