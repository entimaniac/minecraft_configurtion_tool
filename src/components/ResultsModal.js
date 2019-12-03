import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from "@material-ui/core/TextField";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    input: {
        whiteSpace: 'pre;',
    }
});

class ResultsModal extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.open}>
                        <div className={classes.paper}>
                            <h2>Finished!</h2>
                            <p>Copy your new file contents below:</p>
                            <TextField
                                placeholder="MultiLine with rows: 2 and rowsMax: 4"
                                multiline={true}
                                rows={10}
                                rowwsmax={15}
                                InputProps={{
                                    readOnly: true,
                                    classes: {input: this.props.classes['input']},
                                }}
                                value={this.props.formattedProperties}
                                // InputProps={{ classes: {input: this.props.classes['input']} }} />

                            />
                        </div>
                    </Fade>
                </Modal>
            </div>

        );
    }
}

export default withStyles(useStyles)(ResultsModal);
