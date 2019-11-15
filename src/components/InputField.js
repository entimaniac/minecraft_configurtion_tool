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

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><label>{this.props.label}</label></Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}><TextField id="standard" className={classes.textField}
                                                                    label="Standard"/></Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(PropertiesForm);
