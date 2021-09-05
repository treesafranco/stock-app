import './OHCLChart.scss';
import * as React from 'react';
import {
  Children, useEffect, useMemo, useRef, useState,
} from 'react';
import { getTestId } from '@src/utils/appUtil';
import { getMinMaxValues } from './Utils';

export interface IChartData {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IOHCLChart {
  height?: number;
  children?: React.ReactNode;
  chartData: IChartData[];
}

const CHART_GREEN = '#61bf6a';
const CHART_RED = '#ee5b5e';
const CHART_LINE_X = '#eeeeee';
const CHART_LEFT_RIGHT_OFFSET = 8;
const Y_AXIS_OFFSET = 50;

const OHCLChart = (props: IOHCLChart) => {
  const { chartData, height = 200, children } = props;
  const chartRef = useRef();
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    calculateGraphWidth();
  });

  const calculateGraphWidth = () => {
    const element = chartRef.current as HTMLElement;
    const graph = element?.parentElement;
    if (graph) {
      const graphStyle = window.getComputedStyle(graph, null);
      const graphWidth = graphStyle.getPropertyValue('width');
      setChartWidth(parseFloat(graphWidth));
    }
  };

  const minMax = getMinMaxValues(chartData);

  const columns = useMemo(() => {
    const maxValue = minMax.max;
    const minValue = minMax.min;
    const barHeightPercentage = height / (maxValue - minValue);
    const barWidthPercentage = (chartWidth - CHART_LEFT_RIGHT_OFFSET - Y_AXIS_OFFSET) / chartData.length;

    return chartData.map((item: IChartData, index: number) => {
      const barHigh = (maxValue - item.high) * barHeightPercentage;
      const barLow = (maxValue - item.low) * barHeightPercentage;
      const barOpen = (maxValue - item.open) * barHeightPercentage;
      const barClose = (maxValue - item.close) * barHeightPercentage;
      const bullish = item.close > item.open;

      const barXLine = (index + 1) * barWidthPercentage + Y_AXIS_OFFSET;

      return (
        <g key={index}>
          {' '}
          <line
            className="bar-x"
            x1={barXLine}
            y1={0}
            x2={barXLine}
            y2={height}
            stroke={CHART_LINE_X}
            strokeWidth={1}
          ></line>
          <line
            className="bar"
            x1={barXLine}
            y1={barHigh}
            x2={barXLine}
            y2={barLow}
            stroke={bullish ? CHART_GREEN : CHART_RED}
            strokeWidth={1.5}
          ></line>
          <line
            className="bar-open"
            x1={barXLine - 3}
            y1={barOpen}
            x2={barXLine + 0.5}
            y2={barOpen}
            stroke={bullish ? CHART_GREEN : CHART_RED}
            strokeWidth={1.5}
          ></line>
          <line
            className="bar-close"
            x1={barXLine + 3}
            y1={barClose}
            x2={barXLine - 0.5}
            y2={barClose}
            stroke={bullish ? CHART_GREEN : CHART_RED}
            strokeWidth={1.5}
          ></line>
        </g>
      );
    });
  }, [chartData, chartWidth]);

  const renderAxis = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...props,
        axisOffset: Y_AXIS_OFFSET,
        width: chartWidth,
      });
    }
    return child;
  });

  const handleResize = () => {
    calculateGraphWidth();
  };

  window.addEventListener('resize', handleResize);

  return (
    chartData
    && chartData.length > 0 && (
      <svg
        {...getTestId('ohcl-chart')}
        className="ohcl-chart"
        style={{
          height,
        }}
        ref={chartRef}
      >
        {chartWidth && columns}
        {height && chartWidth && renderAxis}
      </svg>
    )
  );
};

export default OHCLChart;
