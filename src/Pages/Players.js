import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from '../Components/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const players = [
    {
        'playerName':"Marcus Donaldson",
        'avatarUrl':'../assets/img_avatar.png',
        'position':"Gaurd",
        'weight': '190 lbs',
        'weightKg': '86.18 kg',
        'height': "6 ft 2 in",
        'heightM': '1.88 m',
        'birthday': "01/06/1993",
        'age': '26',
        'from':'Coventry, UK',
        'yearsActive': '5',
        'bio':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet turpis. Mauris varius ipsum nec felis consectetur vestibulum a in risus. Ut urna purus, suscipit vitae pretium non, finibus sit amet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet turpis. Mauris varius ipsum nec felis consectetur vestibulum a in risus. Ut urna purus, suscipit vitae pretium non, finibus sit amet nulla.  '
    },
    {
        'playerName':"John Doe",
        'avatarUrl':'../assets/img_avatar.png',
        'position':"Center",
        'weight': '160 lbs',
        'weightKg': '72.57 kg',
        'height': "6 ft 7 in",
        'heightM': '2 m',
        'birthday': "05/30/1995",
        'age': '23',
        'from': 'Brooklyn, NY',
        'yearsActive': '1',
        'bio':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet turpis. Mauris varius ipsum nec felis consectetur vestibulum a in risus. Ut urna purus, suscipit vitae pretium non, finibus sit amet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet turpis. Mauris varius ipsum nec felis consectetur vestibulum a in risus. Ut urna purus, suscipit vitae pretium non, finibus sit amet nulla.  '
    },
    {
        'playerName':"Jane Doe",
        'avatarUrl':'../assets/img_avatar.png',
        'position':"Point Gaurd (PG)",
        'weight': '202 lbs',
        'weightKg': '91.62 kg',
        'height': "7 ft 0 in",
        'heightM': '2.13 m',
        'birthday': "01/08/1984",
        'age': '32',
        'from': 'Burlington, VT',
        'yearsActive': '10',
        'bio':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed aliquet turpis. Mauris varius ipsum nec felis consectetur vestibulum a in risus. Ut urna purus, suscipit vitae pretium non, finibus sit amet nulla.  '

    }
];


class Players extends Component {
    state = {};

    constructor (props) {
        super(props);
        
        this.state = {
            playerSelected: false,
            selectedPlayer: {}
        }
    }

    onClick(player) {
        this.setState({
            playerSelected: true,
            selectedPlayer: player
        });
    }

    getDataTable() {
        return (
            <React.Fragment>
                <Table>
                    <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> Height</Typography>
                            <Typography variant="h6" color="textPrimary">{this.state.selectedPlayer.height}</Typography>
                            <Typography variant="button" color="textSecondary">/{this.state.selectedPlayer.heightM}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> Weight</Typography>
                            <Typography variant="h6" color="textPrimary">{this.state.selectedPlayer.weight}</Typography>
                            <Typography variant="button" color="textSecondary">/{this.state.selectedPlayer.weightKg}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> Born </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="overline" color="textSecondary"> {this.state.selectedPlayer.birthday} </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> Age </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="overline" color="textSecondary"> {this.state.selectedPlayer.age} </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> From </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="overline" color="textSecondary"> {this.state.selectedPlayer.from} </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" color="textSecondary"> Year Active </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="overline" color="textSecondary"> {this.state.selectedPlayer.yearsActive} </Typography>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }

    playerList = players.map((player) =>
    <React.Fragment key={player.playerName}>
        <a onClick={this.onClick.bind(this, player)}>
            <Player 
            playerName={player.playerName}
            avatarUrl={player.avatarUrl}
            position={player.position}
            weight={player.weight}
            height={player.height}
            />
        </a>
        <a onClick={this.onClick.bind(this, player)}>
            <Player 
            playerName={player.playerName}
            avatarUrl={player.avatarUrl}
            position={player.position}
            weight={player.weight}
            height={player.height}
            />
        </a>
        <a onClick={this.onClick.bind(this, player)}>
            <Player 
            playerName={player.playerName}
            avatarUrl={player.avatarUrl}
            position={player.position}
            weight={player.weight}
            height={player.height}
            />
        </a>
    </React.Fragment>
    );
    render() {
        return (
            <React.Fragment>
                <Grid style={{height:100+'%', backgroundColor:'#f2f2f2', padding: 10+'px', marginBottom: 50+'px'}} container direction="row" spacing={16}>
                    <Grid style={{paddingRight: 10+'px', height: 90+'vh', overflowY: 'scroll', flexWrap: 'nowrap'}} container item direction="column" xs={5}>
                        {this.playerList}
                    </Grid>
                    {
                        this.state.playerSelected &&
                    <Grid container item alignItems="center" style={{marginTop:10+'px',paddingRight: 10+'px', height: 89+'vh', overflowY: 'scroll', flexWrap: 'nowrap', backgroundColor:'white'}} direction="column" xs={7}>
                        <div style={{textAlign:'center', marginBottom:5+'px', border: '1px solid #dee2e6', minHeight:40+'%', minWidth:80+'%'}}>
                            <Typography style={{position:'relative',top: 50+'%'}} variant="caption">Add media highlights for {this.state.selectedPlayer.playerName}</Typography>
                        </div>
                        <Typography align="center" gutter="true" style={{ color:"#44C8F5"}} variant="h5">
                            {this.state.selectedPlayer.playerName}
                        </Typography>
                        <div style={{marginTop:30+'px'}}> 
                        {this.getDataTable()}
                        </div>
                        <Typography gutter="true" style={{marginTop:30+'px', marginLeft: 50+'px', color:"#44C8F5"}} variant="h5">
                            Bio:
                        </Typography>
                        <Typography gutter="true" style={{marginTop:10+'px', marginLeft: 50+'px'}} variant="overline">
                            {this.state.selectedPlayer.bio}
                        </Typography>    
                    </Grid>
                    }
                </Grid>
            </React.Fragment>
        );
    }
}


export default Players