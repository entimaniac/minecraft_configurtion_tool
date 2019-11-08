import React from 'react';

class PropertiesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <div>
                    <label>
                        Essay:
                    </label>
                    <input value="input"/>
                </div>
                <div>
                    <label>
                        Essay:
                    </label>
                    <input value="input"/>
                </div>
            </form>
        );
    }
}

export default PropertiesForm;
