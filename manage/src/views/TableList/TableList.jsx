import React, { Component } from "react";
import { Route, Link} from 'react-router-dom'
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import {BootstrapTable, TableHeaderColumn, ExportCSVButton} from 'react-bootstrap-table';

var products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

var rowsEvent = {
  exportCSVBtn: this.createCustomExportCSVButton,
  // onRowClick: function(row )  {
  //   window.location.href = "/labor";
    
  //   console.log(row.id);
  // }
 
 }

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ecsData: []
    };
    
  }

  colFormatter = (cell, row) => {
    return (
      <Link to='/some/route'>
        {cell}
      </Link>
    )
  }

  handleExportCSVButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ExportCSVButton click event');
    onClick();
  }
  createCustomExportCSVButton = (onClick) => {
    return (
      <ExportCSVButton
        btnText='Down CSV'
        onClick={ () => this.handleExportCSVButtonClick(onClick) }/>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ecsData: products
      });
    }, 5000);
  }


  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <BootstrapTable data={products} options={rowsEvent} dataFormat={this.hrefIdFormatter} exportCSV>
            
          <TableHeaderColumn dataField='id'  isKey>หมายเลข</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: '0' } }>ชื่อนามสกุล</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: '0' } }>จำนวนผู้ติดตาม</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: '0' } }>จำนวนบุตร</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: 'กัมพูชา' } }>สัญชาติ</TableHeaderColumn>
         </BootstrapTable>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
