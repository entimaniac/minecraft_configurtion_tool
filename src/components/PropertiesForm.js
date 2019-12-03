import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from "./InputField";
import Container from '@material-ui/core/Container';
import Properties from '../utils/PropertiesConfig'

// https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825

class PropertiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
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
            }
        });
    };

    formSubmitHandler = event => {
        event.preventDefault();
        this.props.passData(this.state.formData);
    };

    render() {
        return (
            <Container maxWidth="sm">
                <Grid container>
                    <form>
                        {Properties.properties.map((item, key) =>
                            <InputField key={key} name={item.name} onChange={this.changeHandler}/>
                        )}
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
