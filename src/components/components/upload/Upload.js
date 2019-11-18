import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import UploadForm from "./UploadForm";
import Results from "./results/Results";

const styles = theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    formChild1(dataFromForm) {
        this.setState({
            data: dataFromForm
        })
    }


    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Container maxWidth="lg" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        <UploadForm publishResults={this.formChild1.bind(this)}/>
                        <div>
                            {this.state.data ? <Results response={this.state.data}/> : null}
                        </div>
                    </Grid>
                </Container>


            </React.Fragment>
        );
    }

}

Upload.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Upload);
