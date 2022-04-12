import React from 'react';
// import { Chart } from 'react-google-charts';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

export function PieChartDiv(props) {
  console.log('123', props.pieData);
  let chartTitle = props.chartTitle;
  const options = {
    chart: {
      type: 'pie',
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: props.pieData,
      },
    ],
  };

  return (
    <PieChart
      highcharts={Highcharts}
      options={options}
      allowChartUpdate={true}
      immutable={true}
    />
  );
}
