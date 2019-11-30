import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    toolbarTitle: {
        flexGrow: 1,
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
});

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Container maxWidth="lg" component="footer" className={classes.footer}>
                    <Box mt={5}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
