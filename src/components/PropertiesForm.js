import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: "50%",
        padding: theme.spacing(2),
        textAlign: 'left',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
});

class PropertiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>


                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>


                        <Grid item xs={4}>
                            <Paper className={classes.paper}><label>spawn-protection</label></Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paper}><TextField id="standard" className={classes.textField}
                                                                        label="Standard"/></Paper>
                        </Grid>




                </Grid>


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>spawn-protection</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>max-tick-time</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>query.port</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>generator-settings</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>force-gamemode</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>allow-nether</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>enforce-whitelist</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>gamemode</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>broadcast-console-to-ops</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>enable-query</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>player-idle-timeout</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>difficulty</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>spawn-monsters</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>broadcast-rcon-to-ops</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>op-permission-level</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>pvp</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>snooper-enabled</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>level-type</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>hardcore</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>enable-command-block</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>max-players</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>network-compression-threshold</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>resource-pack-sha1</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>max-world-size</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>function-permission-level</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>rcon.port</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>server-port</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>server-ip</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>spawn-npcs</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>allow-flight</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>level-name</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>view-distance</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>resource-pack</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>spawn-animals</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>white-list</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>rcon.password</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>generate-structures</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>max-build-height</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>online-mode</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>level-seed</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>use-native-transport</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>prevent-proxy-connections</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>enable-rcon</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                    <div>
                        <label>motd</label>
                        <TextField id="standard" className={classes.textField} label="Standard" margin="normal"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(useStyles)(PropertiesForm);
