import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import ResultsTable from "./ResultsTable";

class Results extends Component {

    render() {
        const turnkeyTraitColumns = [{
            Header: 'Trait',
            columns: [{
                Header: "ID",
                accessor: "data.createTrait.traitId"
            }, {
                Header: "Name",
                accessor: "data.createTrait.name",
            }, {
                id: "attribsId",
                Header: "Attributes",
                accessor: d => JSON.stringify(d.data.createTrait.attribs),
            }, {
                Header: "Signals",
                accessor: "data.createTrait.signals"
            }, {
                Header: "Vendor",
                accessor: "data.createTrait.vendor",
            }]
        }, {
            Header: 'Category',
            columns: [{
                Header: "ID",
                accessor: "data.createTrait.segments[0].segment.categories[0].categoryId",
            }, {
                Header: "Name",
                accessor: "data.createTrait.segments[0].segment.categories[0].name",
            }]
        }, {
            Header: 'Segment',
            columns: [{
                Header: "ID",
                accessor: "data.createTrait.segments[0].segment.segmentId",
            }, {
                Header: "Name",
                accessor: "data.createTrait.segments[0].segment.name",
            }, {
                Header: "Decile",
                accessor: "data.createTrait.segments[0].configuration.decile",
            }]
        }];

        const customTraitColumns = [
            {
                Header: 'Trait',
                columns: [{
                    Header: "ID",
                    accessor: "data.createTrait.traitId"
                }, {
                    Header: "Name",
                    accessor: "data.createTrait.name",
                }, {
                    id: "attribsId",
                    Header: "Attributes",
                    accessor: d => JSON.stringify(d.data.createTrait.attribs),
                }, {
                    Header: "Signals",
                    accessor: "data.createTrait.signals"
                }, {
                    Header: "Vendor",
                    accessor: "data.createTrait.vendor",
                }]
            }, {
                Header: 'Category',
                columns: [{
                    Header: "ID",
                    accessor: "data.createTrait.segments[0].segment.categories[0].categoryId",
                }, {
                    Header: "Name",
                    accessor: "data.createTrait.segments[0].segment.categories[0].name",
                }]
            }, {
                Header: 'Segment High',
                columns: [{
                    Header: "ID",
                    accessor: "data.createTrait.segments[0].segment.segmentId",
                }, {
                    Header: "Decile Value",
                    accessor: "data.createTrait.segments[0].configuration.decile",
                }, {
                    Header: "Name",
                    accessor: "data.createTrait.segments[0].segment.name",
                }]
            }, {
                Header: 'Segment Medium',
                columns: [{
                    Header: "ID",
                    accessor: "data.createTrait.segments[1].segment.segmentId",
                }, {
                    Header: "Name",
                    accessor: "data.createTrait.segments[1].segment.name",
                }, {
                    Header: "Decile Value",
                    accessor: "data.createTrait.segments[1].configuration.decile",
                }]
            }, {
                Header: 'Segment Low',
                columns: [{
                    Header: "ID",
                    accessor: "data.createTrait.segments[2].segment.segmentId",
                }, {
                    Header: "Name",
                    accessor: "data.createTrait.segments[2].segment.name",
                }, {
                    Header: "Decile Value",
                    accessor: "data.createTrait.segments[2].configuration.decile",
                }]
            }];

        const errorColumns = [{
            Header: "sid",
            accessor: "row.sid"
        }, {
            Header: "Data Provider",
            accessor: "row[Data Provider]"
        }, {
            Header: "source",
            accessor: "row.source"
        }, {
            Header: "UI Segment Name",
            accessor: "row[UI Segment Name\]"
        }, {
            Header: "Trait Type",
            accessor: "row[Trait Type]"
        }];

        return (
            <Container maxWidth="lg" style={{width: "100vw"}}>
                <ResultsTable data={this.props.response.data.turnkeyTraits} title={"Turnkey Traits"}
                              columns={turnkeyTraitColumns}/>
                <ResultsTable data={this.props.response.data.customTraits} title={"Custom Traits"}
                              columns={customTraitColumns}/>
                <ResultsTable data={this.props.response.data.healthTraits} title={"Health Traits"}
                              columns={customTraitColumns}/>
                <ResultsTable data={this.props.response.data.results} title={"Default Traits"}
                              columns={customTraitColumns}/>
                <ResultsTable data={this.props.response.data.errors} title={"Errors"} columns={errorColumns}/>
            </Container>
        )
    }
}

export default Results;
