import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {withStyles} from "@material-ui/core/styles";

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
    },
    form: {
        textAlign: 'center',
        width: '50%',
        margin: '0 auto'
    }
});

class AttemptTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: {
                'spawn-protection': {
                    name: 'spawn-protection',
                    value: '16',
                },
                'max-tick-time': {
                    name: 'max-tick-time',
                    value: '60000',
                },
                'query.port': {
                    name: 'query.port',
                    value: '25565',
                },
                'generator-settings': {
                    name: 'generator-settings',
                    value: '',
                },
                'force-gamemode': {
                    name: 'force-gamemode',
                    value: 'false',
                },
                'allow-nether': {
                    name: 'allow-nether',
                    value: 'true',
                },
                'enforce-whitelist': {
                    name: 'enforce-whitelist',
                    value: 'false',
                },
                'gamemode': {
                    name: 'gamemode',
                    value: 'survival',
                },
                'broadcast-console-to-ops': {
                    name: 'broadcast-console-to-ops',
                    value: 'true',
                },
                'enable-query': {
                    name: 'enable-query',
                    value: 'false',
                },
                'player-idle-timeout': {
                    name: 'player-idle-timeout',
                    value: '0',
                },
                'difficulty': {
                    name: 'difficulty',
                    value: 'easy',
                },
                'spawn-monsters': {
                    name: 'spawn-monsters',
                    value: 'true',
                },
                'broadcast-rcon-to-ops': {
                    name: 'broadcast-rcon-to-ops',
                    value: 'true',
                },
                'op-permission-level': {
                    name: 'op-permission-level',
                    value: '4',
                },
                'pvp': {
                    name: 'pvp',
                    value: 'true',
                },
                'snooper-enabled': {
                    name: 'snooper-enabled',
                    value: 'true',
                },
                'level-type': {
                    name: 'level-type',
                    value: 'default',
                },
                'hardcore': {
                    name: 'hardcore',
                    value: 'false',
                },
                'enable-command-block': {
                    name: 'enable-command-block',
                    value: 'false',
                },
                'max-players': {
                    name: 'max-players',
                    value: '20',
                },
                'network-compression-threshold': {
                    name: 'network-compression-threshold',
                    value: '256',
                },
                'resource-pack-sha1': {
                    name: 'resource-pack-sha1',
                    value: '',
                },
                'max-world-size': {
                    name: 'max-world-size',
                    value: '29999984',
                },
                'function-permission-level': {
                    name: 'function-permission-level',
                    value: '2',
                },
                'rcon.port': {
                    name: 'rcon.port',
                    value: '25575',
                },
                'server-port': {
                    name: 'server-port',
                    value: '25565',
                },
                'server-ip': {
                    name: 'server-ip',
                    value: '',
                },
                'spawn-npcs': {
                    name: 'spawn-npcs',
                    value: 'true',
                },
                'allow-flight': {
                    name: 'allow-flight',
                    value: 'false',
                },
                'level-name': {
                    name: 'level-name',
                    value: 'world',
                },
                'view-distance': {
                    name: 'view-distance',
                    value: '10',
                },
                'resource-pack': {
                    name: 'resource-pack',
                    value: '',
                },
                'spawn-animals': {
                    name: 'spawn-animals',
                    value: 'true',
                },
                'white-list': {
                    name: 'white-list',
                    value: 'false',
                },
                'rcon.password': {
                    name: 'rcon.password',
                    value: '',
                },
                'generate-structures': {
                    name: 'generate-structures',
                    value: 'true',
                },
                'max-build-height': {
                    name: 'max-build-height',
                    value: '256',
                },
                'online-mode': {
                    name: 'online-mode',
                    value: 'true',
                },
                'level-seed': {
                    name: 'level-seed',
                    value: '',
                },
                'use-native-transport': {
                    name: 'use-native-transport',
                    value: 'true',
                },
                'prevent-proxy-connections': {
                    name: 'prevent-proxy-connections',
                    value: 'false',
                },
                'enable-rcon': {
                    name: 'enable-rcon',
                    value: 'false',
                },
                'motd': {
                    name: 'motd',
                    value: 'A Minecraft Server',
                }
            },
            open: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createOutput = this.createOutput.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        let updatedProperty = {...this.state.properties[name]};
        updatedProperty.value = value;
        this.setState(prevState => ({
            ...prevState,
            properties: {
                ...prevState.properties,
                [name]: updatedProperty
            }
        }));
    }

    handleSubmit(event) {
        this.createOutput();
        this.setState({open: true});
        event.preventDefault();
    }

    createOutput = () => {
        let output = '';
        let properties = this.state.properties;
        for (let key of Object.keys(properties)) {
            output += properties[key].name;
            output += '=';
            output += properties[key].value;
            output += '\n';
        }

        this.setState({formattedProperties: output});
        console.log(output);

    };

    handleOpen = () => {
        this.setState({open: true});
    };


    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        let items = [];
        items = Object.keys(this.state.properties).map((key, index) =>
            <div key={index}>
                <TextField
                    fullWidth
                    id={key}
                    label={key}
                    placeholder={key}
                    name={key}
                    value={this.state.properties[key].value}
                    onChange={this.handleChange}
                />
            </div>
        );

        return (
            <div>
                <div>
                    <div className={classes.form}>
                        <form onSubmit={this.handleSubmit}>
                            {items}
                            <div>
                                <input type="submit" value=" Submit"/>
                            </div>
                        </form>
                    </div>
                    <Modal
                        className={classes.modal}
                        open={this.state.open}
                        onClose={this.handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}>
                        <Fade in={this.state.open}>
                            <div className={classes.paper}>
                                <h2>Finished!</h2>
                                <p>Copy your new file contents below:</p>
                                <TextField
                                    multiline={true}
                                    rows={10}
                                    rowsmax={15}
                                    InputProps={{
                                        readOnly: true,
                                        classes: {input: this.props.classes['input']},
                                    }}
                                    value={this.state.formattedProperties}
                                />
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(AttemptTwo);
