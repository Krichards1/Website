import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faReact, faVimeoV} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


class Footer extends Component {

    render() {
        return (
            <React.Fragment>
            <Divider/>
            <section style={{ backgroundColor:'#F2F2F2', position: 'relative', overflow: 'hidden', paddingBottom: 2+'em'}}>
                <Grid  style={{paddingTop:3+'em'}} spacing={24} container justify="center" direction="row">
                    <Grid item>
                    <a className="nav-item">
                        <FontAwesomeIcon size="lg" icon={faFacebookF} />
                    </a>
                    </Grid>
                    <Grid item>
                    <a className="nav-item">
                        <FontAwesomeIcon size="lg" icon={faVimeoV} />
                    </a>
                    </Grid>                    
                    <Grid item>
                        <a className="nav-item">
                            <FontAwesomeIcon size="lg"  icon={faTwitter} />
                        </a>
                    </Grid>
                    <Grid item>
                        <a className="nav-item">
                            <FontAwesomeIcon size="lg" icon={faEnvelope} />
                        </a>
                    </Grid>
                </Grid>
                <Grid container style={{paddingTop:1.5+'em'}} justify="center" direction="row" spacing={8}>
                    <a className="nav-item">
                        FAQ
                    </a>
                    <a className="nav-item">
                        Terms of Service
                    </a>
                    <a className="nav-item">
                        Contact
                    </a>
                    <a className="nav-item">
                        Donate
                    </a>
                    <a className="nav-item">
                        Contact Us
                    </a>
                </Grid>
                <Typography style={{color: '#44C8F5', paddingTop:1.5+'em'}} variant="overline" align="center">
                    Powered by <FontAwesomeIcon size="2x" icon={faReact} /> React
                </Typography>
            </section>
            </React.Fragment>
        );
    }
}


export default (Footer)