import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { faFacebookF, faTwitter, faVimeoV} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocialBubble.module.css';

const icons = {
    facebook: faFacebookF,
    twitter: faTwitter,
    vimeo: faVimeoV,
    mail: faEnvelope
};

class SocialBubble extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            ...props
        };

        this.icons = props.icons;
    };

    render() {
        return (
            <React.Fragment>
                <div className={styles.bubble}>
                    <Grid spacing={24} container justify="center" direction="column">
                        {
                            this.icons.map(icon => 
                                <Grid item container justify="center" alignItems="center">
                                    <a target="_blank" href={icon.link} className={styles.icon}>
                                        <FontAwesomeIcon size="lg" icon={icons[icon.name]} />
                                    </a>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default SocialBubble