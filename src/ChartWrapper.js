import React, { Component } from "react";
import BarChart from "./BarChart";

export default class ChartWrapper extends Component {
  componentDidMount() {
    this.setState({
      chart: new BarChart(this.refs.barchartRef),
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(props) {
    this.state.chart.update(props.gender);
  }

  render() {
    return <div ref={"barchartRef"}></div>;
  }
}
