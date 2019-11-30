import React from 'react';
import ResultsModal from "./ResultsModal";
import PropertiesForm from "./PropertiesForm";

class Properties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileData: {},
            open: false
        };
        this.handleClose = this.handleClose.bind(this);

    }

    passData = (data) => {
        console.log(data);
        this.setState({
            fileData: data,
            open: true
        });
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
                <ResultsModal fileData={this.state.fileData} open={this.state.open} handleOpen={this.handleOpen}
                              handleClose={this.handleClose}/>
            </div>
        );
    }

}

export default Properties;
