import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

import {
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
} from "variables/Variables.jsx";

import {Pie} from 'react-chartjs-2';


const dataLabor = {
  labels: ["ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคใต้"],
  
	datasets: [{
		data: [100, 100, 100, 100],
		backgroundColor: [
		'#ed676f',
    '#3d7e8a',
    '#f2826e',
    '#1fafd2'
		]
  }],

};


const dataNation = {
  labels: ["ไทย", "กัมพูชา", "เวียดนาม", "ลาว"],
  
	datasets: [{
		data: [100, 100, 100, 100],
		backgroundColor: [
		'#ffb83',
    '#ff2b24',
    '#f15a24',
    '#f7931e'
		]
  }],

};





class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="โครงการทั้งหมด"
                statsValue="100"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="โครงการที่ส่งทะเบียนเด็ก"
                statsValue="75"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="โครงการ Good Space"
                statsValue="25"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Updated now"
              />
            </Col>

          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="รายงานแรงงาน / ปี"
                category="รายงานจำนวนแรงงานที่เข้ามา"
                stats="Updatedd now"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>

          </Row>

          <Row>
          <Col md={6}>
              <Card
                statsIcon="fa fa-clock-o"
                title="สัญชาติแรงงาน / พื้นที่"
                category="รายงานแรงงานตามสัญชาติในพื้นที่พักอาศัย"
                stats="Updated now"
                content={
                  
               <div>
            <Pie data={dataLabor} />
               </div>
                }
              />
            </Col>

          <Col md={6}>
              <Card
                statsIcon="fa fa-clock-o"
                title="สัญชาติแรงงาน"
                category="รายงานแรงงานตามสัญชาติตามอัตราส่วน"
                stats="Updated now"
                content={
                  <div>
              <Pie data={dataNation} />
                     </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
