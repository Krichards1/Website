import React from "react";
import { Typography } from "@material-ui/core";
import Jumbotron from "../Components/Jumbotron";

function Donate () {
    return (
        <Jumbotron>
            <Typography gutterBottom variant="display1">
                100% of your donation goes to supporting the team
            </Typography>
            <Typography gutterBottom={true} color="textSecondary" variant="overline">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.            
            </Typography>
        </Jumbotron>
    );
}

export default Donate;