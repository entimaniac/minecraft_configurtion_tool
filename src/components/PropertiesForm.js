import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from "./InputField";
import Container from '@material-ui/core/Container';

// https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825

class PropertiesForm extends React.Component {
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
