import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Gallary.css';


class Gallary extends Component {
    render() {
        return (
            <React.Fragment>
            <section style={{paddingBottom: 100+'px',position: 'relative', overflow: 'hidden'}}>
                <div className="gallery-container">
                    <div className="gallary-grid">
                        <div className="img one"></div>
                        <div className="img two"></div>
                        <div className="midd"></div>
                        <div className="gallary-txt-container">
                            <div className="primary-text">
                            <Typography gutterBottom variant="h2">
                                <span>The Big Picture</span>
                            </Typography>
                            </div>
                            <div className="secondary-txt">
                            <Typography paragraph style={{color: '#44C8F5'}} gutterBottom variant="subtitle2">
                                <span>And the slightly smaller picture
                                that is right below the big picture</span>
                            </Typography>
                            </div>
                            <div className="main-txt">
                            <Typography paragraph gutterBottom variant="overline">
                            You can flip this layout to have the image on the right instead as well! Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}


export default (Gallary)