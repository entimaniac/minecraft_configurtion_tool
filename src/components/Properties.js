import React from 'react';
import ResultsModal from "./ResultsModal";
import PropertiesForm from "./PropertiesForm";

class Properties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            open: false
        };
        this.handleClose = this.handleClose.bind(this);

    }

    passData = (data) => {
        console.log(data);
        this.setState({
            formData: data,
            open: true
        });
        this.createOutput(data);
    };

    createOutput = (data) => {
        let output = '';
        for (let key of Object.keys(data)) {
            output += data[key].name;
            output += '=';
            output += data[key].value;
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
        return (
            <div>
                <PropertiesForm passData={this.passData}/>
                <ResultsModal formattedProperties={this.state.formattedProperties} fileData={this.state.formData}
                              open={this.state.open}
                              handleOpen={this.handleOpen}
                              handleClose={this.handleClose}/>
            </div>
        );
    }

}

export default Properties;
