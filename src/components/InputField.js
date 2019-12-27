import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
});

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:this.props.value};
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <TextField
                    id={this.props.name}
                    label={this.props.name}
                    style={{margin: 8}}
                    placeholder={this.props.name}
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className={classes.textField}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default withStyles(useStyles)(InputField);
