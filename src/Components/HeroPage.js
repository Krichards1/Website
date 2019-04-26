import React, { Component } from 'react';
import './HeroPage.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        marginTop: 1+'em',
        backgroundColor: '#44C8F5',
        border: 'none',
        color: '#FFFFFF',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

class HeroPage extends Component {

    state = {
        modalOpen: false
    }

    openModalHandler = () => {
        this.setState({
            modalOpen: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            modalOpen: false
        });
    }

    render () {
        return (
            <React.Fragment>
                <section className="home-container">
                    <div className="home-content">
                        <div className="hero-image left">
                            <img className="logo" style={{marginTop: 1+'px'}} src={require('../assets/hero-left.png')} alt="blk white basketball hoop left" />
                        </div>
                        <div className="midd"></div>
                        <div className="hero-image right">
                            <img className="logo" src={require('../assets/hero-right.png')} alt="blk white basketball hoop right" />
                        </div>
                        <div className="callout">
                            <Typography gutterBottom={true} variant="h2">
                                <span className="highlight">Imagine Better</span>
                            </Typography>
                            <Typography gutterBottom={true} variant="h2">
                                <span className="highlight">Text Here</span>
                            </Typography>
                        <div className="subtext">
                            <Typography variant="overline">
                            <span className="sub">
                                Here you should think about what you want your call to action to be. Sign up? Contact? Read More?
                            </span>
                            </Typography>
                        </div>
                        <div>
                            <StyledButton onClick={this.openModalHandler.bind(this)} variant="contained">
                                Call To Action
                            </StyledButton>
                        </div>
                        </div>
                    </div>
                </section> 
                <Dialog
                open={this.state.modalOpen}
                onClose={this.closeModalHandler}
                aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Example Popup</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Modals are pop out screens that are usually useed to display important information, or forms for sign ups and logins. You can configure a modal to popup for just about any situation such as a button click or when the user is doing something.
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="fname"
                        label="First Name"
                        type="text"
                        style={{paddingRight: 2+'rem' }}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="lname"
                        label="Last Name"
                        type="Text"
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeModalHandler} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.closeModalHandler} color="primary">
                        Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>  
            </React.Fragment>
        );
    }
}

export default HeroPage;