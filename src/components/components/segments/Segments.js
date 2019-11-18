import React, {Component} from "react";
import ReactTable from "react-table"
import "react-table/react-table.css"
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Container from '@material-ui/core/Container';

class Segments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageSize: 10,
            page: 0,
            pages: null,
            loading: true,
            sorted: []
        };
        this.getSegments = this.getSegments.bind(this);
    }

    getSegments(state, instance) {
        this.setState({loading: true});
        // FYI, cannot send body in GET with axios?: https://github.com/axios/axios/issues/787
        axios
            .get("/api/segments", {
                params: {
                    page: state.page,
                    size: state.pageSize,
                    sorted: state.sorted
                }
            })
            .then(response => {
                console.debug("data returned:\n", response.data);
                // return response.data;
                this.setState({
                    data: response.data.content,
                    pages: response.data.totalPages,
                    loading: false
                });
                return response.data;
            })
            .catch(err => {
                console.error(err.message);
            });
    };

    render() {
        const {data, pages, loading} = this.state;
        const segmentColumns = [
            {
                Header: "segmentId",
                accessor: "segmentId"
            },
            {
                Header: "name",
                accessor: "name"
            },
            {
                Header: "systemCode",
                accessor: "systemCode"
            },
            {
                Header: "code",
                accessor: "code"
            },
            {
                Header: "isActive",
                accessor: "isActive"
            },
            {
                Header: "status",
                accessor: "status"
            },
            {
                Header: "combinationString",
                accessor: "combinationString"
            },
            {
                Header: "description",
                accessor: "description"
            },
            {
                Header: "tags",
                accessor: "tags"
            },
            {
                Header: "createdBy",
                accessor: "createdBy"
            },
            {
                Header: "dateCreated",
                accessor: "dateCreated"
            },
            {
                Header: "updatedBy",
                accessor: "updatedBy"
            },
            {
                Header: "dateUpdated",
                accessor: "dateUpdated"
            },
            {
                Header: "businessDescription",
                accessor: "businessDescription"
            },
            {
                Header: "businessName",
                accessor: "businessName"
            },
            {
                Header: "segmentSize",
                accessor: "segmentSize"
            }
        ];

        return (
            <Container maxWidth="lg" style={{width: "100vw"}}>
                <Box m={2}>
                    <Typography component="h1" variant="h5">
                        Segments
                    </Typography>
                    <div>
                        <ReactTable
                            columns={segmentColumns}
                            manual
                            data={data}
                            pages={pages}
                            loading={loading}
                            onFetchData={this.getSegments}
                            defaultPageSize={10}
                            onSortedChange={(newSort, column) => {
                                this.setState({sorted: newSort});
                            }}
                        />
                    </div>
                </Box>
            </Container>
        )
    }
}

export default Segments;
