import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from "./InputField";
import Container from '@material-ui/core/Container';

// https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825

class PropertiesForm extends React.Component {
    propertiesConfig = [
        {
            name: 'spawn-protection',
            defaultValue: '16',
            inputType: 'text'
        },
        {
            name: 'max-tick-time',
            defaultValue: '60000',
            inputType: 'text'
        },
        {
            name: 'query.port',
            defaultValue: '25565',
            inputType: 'text'
        },
        {
            name: 'generator-settings',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'force-gamemode',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'allow-nether',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'enforce-whitelist',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'gamemode',
            defaultValue: 'survival',
            inputType: 'text'
        },
        {
            name: 'broadcast-console-to-ops',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'enable-query',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'player-idle-timeout',
            defaultValue: '0',
            inputType: 'text'
        },
        {
            name: 'difficulty',
            defaultValue: 'easy',
            inputType: 'text'
        },
        {
            name: 'spawn-monsters',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'broadcast-rcon-to-ops',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'op-permission-level',
            defaultValue: '4',
            inputType: 'text'
        },
        {
            name: 'pvp',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'snooper-enabled',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'level-type',
            defaultValue: 'default',
            inputType: 'text'
        },
        {
            name: 'hardcore',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'enable-command-block',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'max-players',
            defaultValue: '20',
            inputType: 'text'
        },
        {
            name: 'network-compression-threshold',
            defaultValue: '256',
            inputType: 'text'
        },
        {
            name: 'resource-pack-sha1',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'max-world-size',
            defaultValue: '29999984',
            inputType: 'text'
        },
        {
            name: 'function-permission-level',
            defaultValue: '2',
            inputType: 'text'
        },
        {
            name: 'rcon.port',
            defaultValue: '25575',
            inputType: 'text'
        },
        {
            name: 'server-port',
            defaultValue: '25565',
            inputType: 'text'
        },
        {
            name: 'server-ip',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'spawn-npcs',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'allow-flight',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'level-name',
            defaultValue: 'world',
            inputType: 'text'
        },
        {
            name: 'view-distance',
            defaultValue: '10',
            inputType: 'text'
        },
        {
            name: 'resource-pack',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'spawn-animals',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'white-list',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'rcon.password',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'generate-structures',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'max-build-height',
            defaultValue: '256',
            inputType: 'text'
        },
        {
            name: 'online-mode',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'level-seed',
            defaultValue: '',
            inputType: 'text'
        },
        {
            name: 'use-native-transport',
            defaultValue: 'true',
            inputType: 'text'
        },
        {
            name: 'prevent-proxy-connections',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'enable-rcon',
            defaultValue: 'false',
            inputType: 'text'
        },
        {
            name: 'motd',
            defaultValue: 'A Minecraft Server',
            inputType: 'text'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            formControls: {}
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    };

    formSubmitHandler = event => {
        event.preventDefault();
        this.props.passData(this.state.formControls);
    };

    render() {
        return (
            <Container maxWidth="sm">
                <Grid container>
                    <form>
                        <InputField name={"spawn-protection"} onChange={this.changeHandler}/>
                        <InputField name={"max-tick-time"} onChange={this.changeHandler}/>
                        <InputField name={"query.port"} onChange={this.changeHandler}/>
                        <InputField name={"generator-settings"} onChange={this.changeHandler}/>
                        <InputField name={"force-gamemode"} onChange={this.changeHandler}/>
                        <InputField name={"allow-nether"} onChange={this.changeHandler}/>
                        <InputField name={"enforce-whitelist"} onChange={this.changeHandler}/>
                        <InputField name={"gamemode"} onChange={this.changeHandler}/>
                        <InputField name={"broadcast-console-to-ops"} onChange={this.changeHandler}/>
                        <InputField name={"enable-query"} onChange={this.changeHandler}/>
                        <InputField name={"player-idle-timeout"} onChange={this.changeHandler}/>
                        <InputField name={"difficulty"} onChange={this.changeHandler}/>
                        <InputField name={"spawn-monsters"} onChange={this.changeHandler}/>
                        <InputField name={"broadcast-rcon-to-ops"} onChange={this.changeHandler}/>
                        <InputField name={"op-permission-level"} onChange={this.changeHandler}/>
                        <InputField name={"pvp"} onChange={this.changeHandler}/>
                        <InputField name={"snooper-enabled"} onChange={this.changeHandler}/>
                        <InputField name={"level-type"} onChange={this.changeHandler}/>
                        <InputField name={"hardcore"} onChange={this.changeHandler}/>
                        <InputField name={"enable-command-block"} onChange={this.changeHandler}/>
                        <InputField name={"max-players"} onChange={this.changeHandler}/>
                        <InputField name={"network-compression-threshold"} onChange={this.changeHandler}/>
                        <InputField name={"resource-pack-sha1"} onChange={this.changeHandler}/>
                        <InputField name={"max-world-size"} onChange={this.changeHandler}/>
                        <InputField name={"function-permission-level"} onChange={this.changeHandler}/>
                        <InputField name={"rcon.port"} onChange={this.changeHandler}/>
                        <InputField name={"server-port"} onChange={this.changeHandler}/>
                        <InputField name={"server-ip"} onChange={this.changeHandler}/>
                        <InputField name={"spawn-npcs"} onChange={this.changeHandler}/>
                        <InputField name={"allow-flight"} onChange={this.changeHandler}/>
                        <InputField name={"level-name"} onChange={this.changeHandler}/>
                        <InputField name={"view-distance"} onChange={this.changeHandler}/>
                        <InputField name={"resource-pack"} onChange={this.changeHandler}/>
                        <InputField name={"spawn-animals"} onChange={this.changeHandler}/>
                        <InputField name={"white-list"} onChange={this.changeHandler}/>
                        <InputField name={"rcon.password"} onChange={this.changeHandler}/>
                        <InputField name={"generate-structures"} onChange={this.changeHandler}/>
                        <InputField name={"max-build-height"} onChange={this.changeHandler}/>
                        <InputField name={"online-mode"} onChange={this.changeHandler}/>
                        <InputField name={"level-seed"} onChange={this.changeHandler}/>
                        <InputField name={"use-native-transport"} onChange={this.changeHandler}/>
                        <InputField name={"prevent-proxy-connections"} onChange={this.changeHandler}/>
                        <InputField name={"enable-rcon"} onChange={this.changeHandler}/>
                        <InputField name={"motd"} onChange={this.changeHandler}/>
                        <button onClick={this.formSubmitHandler}>
                            Submit
                        </button>
                    </form>
                </Grid>
            </Container>
        );
    }
}

export default PropertiesForm;
