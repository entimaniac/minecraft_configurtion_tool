import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {withStyles} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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

class PropertiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: {
                'spawn-protection': {
                    name: 'spawn-protection',
                    value: '16',
                    type: 'number',
                    minimum: 0,
                    description: 'Determines the radius of the spawn protection as 2x+1. Setting this to 0 does not disable spawn protection, but protects the single block at the spawn point. 1 protects a 3×3 area centered on the spawn point. 2 protects 5×5, 3 protects 7×7, etc. This option is not generated on the first server start and appears when the first player joins. If there are no ops set on the server, the spawn protection is disabled automatically.'
                },
                'max-tick-time': {
                    name: 'max-tick-time',
                    value: '60000',
                    type: 'number',
                    minimum: -1,
                },
                'query.port': {
                    name: 'query.port',
                    value: '25565',
                    type: 'number',
                    minimum: 1,
                    maximum: 65534,
                },
                'generator-settings': {
                    name: 'generator-settings',
                    value: '',
                },
                'force-gamemode': {
                    name: 'force-gamemode',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'allow-nether': {
                    name: 'allow-nether',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'enforce-whitelist': {
                    name: 'enforce-whitelist',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'gamemode': {
                    name: 'gamemode',
                    value: 'survival',
                    type: 'select',
                    options: ['survival', 'creative', 'adventure', 'spectator']
                },
                'broadcast-console-to-ops': {
                    name: 'broadcast-console-to-ops',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'enable-query': {
                    name: 'enable-query',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'player-idle-timeout': {
                    name: 'player-idle-timeout',
                    value: 0,
                    type: 'number',
                    minimum: 0,
                },
                'difficulty': {
                    name: 'difficulty',
                    value: 'easy',
                    type: 'select',
                    options: ['peaceful', 'easy', 'normal', 'hard']
                },
                'spawn-monsters': {
                    name: 'spawn-monsters',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'broadcast-rcon-to-ops': {
                    name: 'broadcast-rcon-to-ops',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'op-permission-level': {
                    name: 'op-permission-level',
                    value: '4',
                    type: 'select',
                    options: ['1', '2', '3', '4']
                },
                'pvp': {
                    name: 'pvp',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'snooper-enabled': {
                    name: 'snooper-enabled',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'level-type': {
                    name: 'level-type',
                    value: 'default',
                    type: 'select',
                    options: ['flat', 'legacy', 'default']
                },
                'hardcore': {
                    name: 'hardcore',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'enable-command-block': {
                    name: 'enable-command-block',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'max-players': {
                    name: 'max-players',
                    value: 20,
                    type: 'number',
                    minimum: 0,
                },
                'network-compression-threshold': {
                    name: 'network-compression-threshold',
                    value: 256,
                    type: 'number',
                    minimum: -1,
                },
                'resource-pack-sha1': {
                    name: 'resource-pack-sha1',
                    value: '',
                },
                'max-world-size': {
                    name: 'max-world-size',
                    value: 29999984,
                    type: 'number',
                    minimum: 1,
                    maximum: 29999984,
                },
                'function-permission-level': {
                    name: 'function-permission-level',
                    value: '2',
                    type: 'select',
                    options: ['1', '2', '3', '4']
                },
                'rcon.port': {
                    name: 'rcon.port',
                    value: 25575,
                    type: 'number',
                    minimum: 1,
                    maximum: 65534,
                },
                'server-port': {
                    name: 'server-port',
                    value: 25565,
                    type: 'number',
                    minimum: 1,
                    maximum: 65534,
                },
                'server-ip': {
                    name: 'server-ip',
                    value: '',
                },
                'spawn-npcs': {
                    name: 'spawn-npcs',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'allow-flight': {
                    name: 'allow-flight',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                }
                ,
                'level-name': {
                    name: 'level-name',
                    value: 'world',
                },
                'view-distance': {
                    name: 'view-distance',
                    value: 10,
                    type: 'number',
                    minimum: 3,
                    maximum: 32,
                },
                'resource-pack': {
                    name: 'resource-pack',
                    value: '',
                },
                'spawn-animals': {
                    name: 'spawn-animals',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'white-list': {
                    name: 'white-list',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'rcon.password': {
                    name: 'rcon.password',
                    value: '',
                },
                'generate-structures': {
                    name: 'generate-structures',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'max-build-height': {
                    name: 'max-build-height',
                    value: 256,
                    type: 'number',
                    minimum: 0,
                },
                'online-mode': {
                    name: 'online-mode',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'level-seed': {
                    name: 'level-seed',
                    value: '',
                },
                'use-native-transport': {
                    name: 'use-native-transport',
                    value: 'true',
                    type: 'select',
                    options: ['true', 'false']
                },
                'prevent-proxy-connections': {
                    name: 'prevent-proxy-connections',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
                },
                'enable-rcon': {
                    name: 'enable-rcon',
                    value: 'false',
                    type: 'select',
                    options: ['true', 'false']
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
        this.fileUpload = this.fileUpload.bind(this);
    }

    fileUpload(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        let propCopy = this.state.properties;
        const scope = this;
        reader.onload = function (event) {
            let contents = event.target.result;
            let lines = contents.split('\n');
            for (let line of lines) {
                let trimmed = line.trim();
                if (trimmed === '' || trimmed[0] === '#') {
                    continue;
                }
                let splitLine = line.split('=');
                let updatedProperty = {...scope.state.properties[splitLine[0]]};
                updatedProperty.value = splitLine[1];
                propCopy[splitLine[0]] = updatedProperty;
            }
            scope.setState({
                properties: propCopy
            });
        };
        reader.readAsText(file);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        let propCopy = this.state.properties;
        propCopy[name].value = value;
        this.setState({
            properties: propCopy
        });
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
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.formattedProperties], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "server.properties";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        const {classes} = this.props;


        let items = Object.keys(this.state.properties).map((key, index) => {
            if (this.state.properties[key].type === 'select') {
                // select inputs
                let options = this.state.properties[key].options.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                });
                return (
                    <div key={index}>
                        <FormControl
                            fullWidth
                            margin="normal">
                            <InputLabel>{key}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name={key}
                                value={this.state.properties[key].value}
                                onChange={this.handleChange}
                            >
                                {options}
                            </Select>
                        </FormControl>
                    </div>
                )
            } else return (
                <div key={index}>
                    <TextField
                        fullWidth
                        margin="normal"
                        id={key}
                        label={key}
                        placeholder={key}
                        name={key}
                        inputProps={{
                            min: this.state.properties[key].minimum,
                            max: this.state.properties[key].maximum,
                            step: "1"
                        }}
                        type={this.state.properties[key].type}
                        value={this.state.properties[key].value}
                        onChange={this.handleChange}
                    />
                </div>);
        });

        return (
            <div>
                <div className={classes.form}>
                    <input type="file" name="file" onChange={this.fileUpload}/>
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
                            <div>
                                <button onClick={this.downloadTxtFile}>Export File</button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default withStyles(useStyles)(PropertiesForm);
