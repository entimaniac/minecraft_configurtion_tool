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
            formData: {},
            data: [...Properties.properties]
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    // loadInitialState = () => {
    //     for(let property of Properties.properties){
    //         this.setState({
    //             formData: {
    //                 ...this.state.formData,
    //                 [property.name]: {
    //                     ...this.state.formData[name],
    //                     value
    //                 }
    //             }
    //         });
    //     }
    // };

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
            data: {
                ...this.state.data,
                [name]: {
                    ...this.state.data[name],
                    value
                }
            }
        });
        console.log(Array.isArray(this.state.formData));
        console.log(Array.isArray(this.state.data));
        console.log(typeof this.state.data);
        console.log( this.state.data);
        console.log(typeof Properties.properties);
        console.log( Properties.properties);
    };

    formSubmitHandler = event => {
        event.preventDefault();
        this.props.passData(this.state.data);
    };

    render() {


        let items = this.state.data.map((item, key) =>
            <InputField value={item.value} key={key} name={item.name} onChange={this.changeHandler}/>
        );
        return (
            <Container maxWidth="sm">
                <Grid container>
                    <form>
                        {items}

                        {/*{this.state.data.map((item, key) =>*/}
                        {/*    <InputField value={item.value} key={key} name={item.name} onChange={this.changeHandler}/>*/}
                        {/*)}*/}
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
