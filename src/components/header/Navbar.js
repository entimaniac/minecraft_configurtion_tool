import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import {Link} from "react-router-dom";


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/segments" style={{textDecoration: 'none'}}>Segments</Link>
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/upload" style={{textDecoration: 'none'}}>Upload</Link>
                    </TypoGraphy>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default NavBar;