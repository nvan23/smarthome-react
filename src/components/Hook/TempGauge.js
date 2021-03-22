import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';
const TempGauge = () => {
  var [percent, setPercent] = useState(0);
  var ref;
  var ticks = [0, 1 / 3, 2 / 3, 1];
  var color = ['#30BF78', '#FAAD14', '#F4664A'];
  var config = {
    percent,
    width: 160,
    height: 160,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#30BF78 0.5:#FAAD14 1:#F4664A'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter (v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      title: {
        formatter: function formatter (_ref) {
          var percent = _ref.percent;
          if (percent < ticks[1]) {
            return `${(Number(percent) * 100).toFixed(1)}&deg;C - Cool`;
          }
          if (percent < ticks[2]) {
            return `${(Number(percent) * 100).toFixed(1)}&deg;C - Hot`;
          }
          return `${(Number(percent) * 100).toFixed(1)}&deg;C - Extremely Hot`;
        },
        style: function style (_ref2) {
          var percent = _ref2.percent;
          return {
            marginTop: '24px',
            fontSize: '16px',
            lineHeight: 1.5,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
          };
        },
      },
      content: {
        offsetY: 36,
        style: {
          marginTop: '14px',
          fontSize: '20px',
          color: '#4B535E',
        },
        formatter: function formatter () {
          return 'Temperature';
        },
      },
    },
  };
  useEffect(() => {
    var data = percent;
    setInterval(function () {
      if (data >= 1) {
        data -= 0.8;
        setPercent(data);
      }
      data += 0.105;
      setPercent(data);
    }, 1000);
  }, []);
  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};
export default TempGauge;