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
            <AppBar style={{backgroundColor: 'transparent', color: 'black', boxShadow: 'none'}} position="absolute">
                <Toolbar className="toolbar">
                    {/* <div className="nav-items left">
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Features
                            </Typography>
                        </a>
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Enterprise
                            </Typography>
                        </a>
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Contact
                            </Typography>
                        </a>
                    </div> */}
                    <Grid>
                        <Avatar alt="Dip Logo" style={{height: 60+'px', width: 60+'px', margin: 10+'px'}} src={require('../assets/black-logo.png')} />
                    </Grid>
                    <div className="nav-items right">
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Players
                            </Typography>
                        </a>
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Contact
                            </Typography>
                        </a>
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            Pricing
                            </Typography>
                        </a>
                        <a href="/" className="nav-item">
                            <Typography variant="button" color="inherit">
                            About
                            </Typography>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;