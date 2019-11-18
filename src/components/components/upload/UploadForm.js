import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            disableForm: false,
        };
    }

    handleChange = event => {
        let file = event.target.files[0];
        console.debug(event.target.files[0]);
        this.setState({
            selectedFile: file
        });
    };

    handleClick = () => {
        const data = new FormData();
        data.append("file", this.state.selectedFile);
        axios
            .post("/api/traits/upload", data, {})
            .then(res => {
                console.info("upload success");
                console.debug("data returned:\n", res.data);
                this.publishResultsToParent({
                    "data": res.data
                });
                this.setState({
                    disableForm: true,
                })
            })
            .catch(err => {
                console.info("upload fail");
                console.error(err.message);
            });
    };

    publishResultsToParent(data) {
        this.props.publishResults(data);
    }

    render() {
        const {classes} = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <ArrowUpward/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Upload
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="file"
                            name="upload"
                            autoFocus
                            type="file"
                            onChange={this.handleChange}
                            disabled={this.state.disableForm}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleClick}
                            disabled={this.state.disableForm}
                        >
                            Upload
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

UploadForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadForm);
