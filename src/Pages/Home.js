import React from "react";
import HeroPage from '../Components/HeroPage';
import Jumbotron from '../Components/Jumbotron';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Parallax from '../Components/Parallax';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Gallary from '../Components/Gallary';

function Home () {
    return (
        <React.Fragment>
        <HeroPage />
        <Jumbotron>
            <Typography style={{color: '#44C8F5'}} gutterBottom={true} variant="display1">
              Our Mission
            </Typography>
            <Typography gutterBottom={true} paragraph={true} variant="overline">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            </Typography>
            <br/>
            <Divider variant="middle"/>
            <br/>
            <Typography gutterBottom={true} style={{color: '#44C8F5'}} variant="display1">
              Our Statement
            </Typography>
            <Typography gutterBottom={true} paragraph={true} variant="overline">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
            </Typography>
        </Jumbotron>
        <Parallax/>
        <Jumbotron>
          <Typography style={{color: '#44C8F5'}} gutterBottom={true} variant="display1" align="center">
            These Are Cards
          </Typography>
          <Typography gutterBottom={true} color="textSecondary" variant="overline" align="center">
            They should be easy to scan for relevant and actionable information. 
          </Typography>
          <Grid
            style={{marginTop: 2+'rem'}}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={24}
          >
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <FaceIcon style={{color: 'orange', fontSize: 100+'px'}}/>
                    <Typography variant="h6" align="left" paragraph gutterBottom>
                      Lorem ipsum
                    </Typography>
                    <Typography variant="caption" align="left" gutterBottom>
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                      <br/>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <FingerprintIcon style={{color: 'orange', fontSize: 100+'px'}}/>
                    <Typography variant="h6" align="left" paragraph gutterBottom>
                      Lorem ipsum
                    </Typography>
                    <Typography variant="caption" align="left" gutterBottom>
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                      <br/>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <SpeakerNotesIcon style={{color: 'orange', fontSize: 100+'px'}}/>
                    <Typography variant="h6" align="left" paragraph gutterBottom>
                      Lorem ipsum
                    </Typography>
                    <Typography variant="caption" align="left" gutterBottom>
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                      <br/>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Jumbotron>
        <Gallary/>
      </React.Fragment>
    );
}

export default Home;