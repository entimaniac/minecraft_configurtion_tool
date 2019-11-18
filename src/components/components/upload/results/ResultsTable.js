import React, {Component} from "react";
import ReactTable from "react-table"
import "react-table/react-table.css"
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.download = this.download.bind(this);
        this.state = {
            dataToDownload: []
        };
    }

    download(event) {
        // build up headers with appropriate key names (accessors/ids) for the table data
        let headers = [];
        let tableColumns = this.props.columns;
        for (let tableColumn of tableColumns) {
            let columnHeader = tableColumn.Header;
            // if a header has sub-headers, concatenate the two
            if (tableColumn.columns) {
                for (let subColumn of tableColumn.columns) {
                    headers.push({
                        "Header": columnHeader + " - " + subColumn.Header,
                        // fields that use a custom accessor function can't use .accessor as a key
                        "accessor": (typeof (subColumn.accessor) === 'function' ? subColumn.id : subColumn.accessor),
                    });
                }
            } else {
                headers.push({
                    "Header": columnHeader,
                    "accessor": (typeof (tableColumn.accessor) === 'function' ? tableColumn.id : tableColumn.accessor),
                });
            }
        }

        // build up data for export from table data
        let tableData = this.reactTable.getResolvedState().sortedData;
        let data_to_download = [];
        for (let row = 0; row < tableData.length; row++) {
            // react-table library has metadata fields that we don't care to export
            delete tableData[row]["_original"];
            delete tableData[row]["_index"];
            delete tableData[row]["_subRows"];
            delete tableData[row]["_nestingLevel"];

            let record_to_download = {};
            for (let i = 0; i < headers.length; i++) {
                record_to_download[headers[i].Header] = tableData[row][headers[i].accessor];
            }
            data_to_download.push(record_to_download)
        }
        this.setState({dataToDownload: data_to_download}, () => {
            this.csvLink.link.click()
        })
    }

    render() {
        if (!this.props.data.length) {
            return null;
        }
        return (
            <Box m={2}>
                <Typography component="h1" variant="h5">
                    {this.props.title}
                </Typography>
                <div>
                    <ReactTable
                        data={this.props.data}
                        columns={this.props.columns}
                        defaultPageSize={10}
                        minRows={0}
                        ref={(r) => this.reactTable = r}/>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <Box m={1}>
                            <div>
                                <Button variant="contained" color="secondary" onClick={this.download}>
                                    Save
                                </Button>
                            </div>
                            <CSVLink
                                data={this.state.dataToDownload}
                                filename={this.props.title + " - " + (new Date()).toISOString() + ".csv"}
                                className="hidden"
                                ref={(r) => this.csvLink = r}
                                target="_blank"/>
                        </Box>
                    </Grid>
                </div>
            </Box>
        )
    }
}

export default ResultsTable;
