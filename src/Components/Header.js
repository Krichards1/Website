import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
        <div>
            <AppBar style={{paddingTop: 10+'px', paddingBottom: 40+'px', backgroundColor: 'transparent', boxShadow: 'none'}} position="static">
                <Toolbar className="toolbar">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid container style={{width:40+'%'}} alignItems="center" justify="flex-start">
                            <a href="/" className="nav-item left">
                                <Typography variant="button" color="inherit">
                                About Us
                                </Typography>
                            </a>
                            <a href="/" className="nav-item left">
                                <Typography variant="button" color="inherit">
                                Our Impact
                                </Typography>
                            </a>
                            <a href="/" className="nav-item left">
                                <Typography variant="button" color="inherit">
                                Lorem
                                </Typography>
                            </a>
                        </Grid>
                        <Avatar alt="Dip Logo" style={{height: 60+'px', width: 60+'px'}} src={require('../assets/black-logo.png')} />
                        <Grid container style={{width:40+'%'}} alignItems="center" justify="flex-end">
                            <a href="/" className="nav-item">
                                <Typography variant="button" color="inherit">
                                Donate
                                </Typography>
                            </a>
                            <a href="/" className="nav-item">
                                <Typography variant="button" color="inherit">
                                Player
                                </Typography>
                            </a>
                            <a href="/" className="nav-item">
                                <Typography variant="button" color="inherit">
                                Contact Us
                                </Typography>
                            </a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;