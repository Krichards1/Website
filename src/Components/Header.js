import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar style={{ paddingBottom: 20+'px', backgroundColor: 'transparent', boxShadow: 'none'}} position="static">
                <Toolbar className="toolbar">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid container style={{width:40+'%'}} alignItems="center" justify="flex-start">
                            <a className="nav-item left">
                                <Typography variant="button" color="inherit">
                                About Us
                                </Typography>
                            </a>
                            <a className="nav-item left">
                                <Typography variant="button" color="inherit">
                                Our Impact
                                </Typography>
                            </a>
                            <a className="nav-item left">
                                <Typography variant="button" color="inherit">
                                Lorem
                                </Typography>
                            </a>
                        </Grid>
                        <Link to="/"><Avatar alt="Dip Logo" style={{height: 60+'px', width: 60+'px', marginRight:1+'em'}} src={require('../assets/black-logo.png')} /></Link>
                        <Grid container style={{width:40+'%'}} alignItems="center" justify="flex-end">
                            <NavLink to="/donate" activeClassName="selected" className="nav-item">
                                <Typography variant="button" color="inherit">
                                Donate
                                </Typography>
                            </NavLink>
                            <NavLink to="/players" activeClassName="selected" className="nav-item">
                                <Typography variant="button" color="inherit">
                                Players
                                </Typography>
                            </NavLink>
                            <a className="nav-item">
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