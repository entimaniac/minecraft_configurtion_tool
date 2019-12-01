import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
});

class Header extends Component {
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Minecraft Properties File Generation Tool
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
