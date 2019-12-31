import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from "./InputField";
import Container from '@material-ui/core/Container';
import Properties from '../utils/PropertiesConfig'

class PropertiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            ...Properties.properties.map(item => ({[item.name]: item}))
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formData: {
                ...this.state.formData,
                [name]: {
                    ...this.state.formData[name],
                    value
                }
            },
            // data: [
            //     ...this.state.data,
            //     [name]: {
            //         ...this.state.data[name],
            //         value
            //     ]
            // }
            [name]: {
                ...this.state.data[name],
                value
            }
        });
    };

    formSubmitHandler = event => {
        event.preventDefault();
        this.props.passData(this.state.data);
    };

    render() {

        let items = [];
        console.log(this.state.data);
        if (this.state.data && Array.isArray(this.state.data)) {
            items = this.state.data.map((item, key) =>
                <InputField value={item.value} key={key} name={item.name} onChange={this.changeHandler}/>
            );
        }

        return (
            <Container maxWidth="sm">
                <Grid container>
                    <form>
                        {items}
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
