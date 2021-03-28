import React from 'react';
import { Line } from '@ant-design/charts';
const LineChart = () => {
  var data = [
    {
      year: '3/21/2021',
      value: 3,
    },
    {
      year: '3/22/2021',
      value: 4,
    },
    {
      year: '3/23/2021',
      value: 3.5,
    },
    {
      year: '3/24/2021',
      value: 5,
    },
    {
      year: '3/25/2021',
      value: 4.9,
    },
    {
      year: '3/26/2021',
      value: 6,
    },
    {
      year: '3/27/2021',
      value: 7,
    },
    {
      year: '3/28/2021',
      value: 9,
    },
    {
      year: '3/29/2021',
      value: 13,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return <Line {...config} />;
};
export default LineChart;