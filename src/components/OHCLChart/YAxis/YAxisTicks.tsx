import * as React from 'react';
import { getTestId } from '@src/utils/appUtil';
import { IChartData } from '@src/components/OHCLChart/OHCLChart';
import { getMinMaxValues } from '../Utils';

const Y_STROKE = '#9da8aa';

interface IYAxisTicks {
  height?: number;
  width?: number;
  axisOffset?: number;
  chartData?: IChartData[];
  stroke?: string;
}

const YAxisTicks = (props: IYAxisTicks) => {
  const {
    height, width, stroke = Y_STROKE, axisOffset = 0, chartData,
  } = props;

  const minMax = getMinMaxValues(chartData);

  const renderTicks = () => {
    const maxValue = minMax.max;
    const minValue = minMax.min;
    const noOfTicks = (maxValue - minValue) / 10;
    const tickGap = (height / (maxValue - minValue)) * 10;
    const tickElements = [];

    for (let i = 0; i <= noOfTicks; i++) {
      tickElements.push(
        <g key={`tick-${i}`} className="tick">
          <line
            style={{
              stroke,
              strokeWidth: 0.5,
            }}
            x1={axisOffset}
            y1={i * tickGap}
            x2={axisOffset - 5}
            y2={i * tickGap}
          ></line>

          <text
            x={axisOffset - 40}
            y={i === 0 ? i * tickGap + 8 : i * tickGap}
            style={{
              fontSize: '10px',
              fill: stroke,
            }}
          >
            {`$ ${maxValue - i * 10}`}
          </text>
        </g>,
      );
    }

    if (noOfTicks < 1) {
      tickElements.push(
        <g key={'tick-1'} className="tick">
          {' '}
          <text
            x={axisOffset - 40}
            y={height}
            style={{
              fontSize: '10px',
              fill: stroke,
            }}
          >
            {`$ ${minValue}`}
          </text>
        </g>,
      );
    }
    return tickElements;
  };

  return (
    <g {...getTestId('y-axis-ticks')} className="y-axis-ticks">
      {renderTicks()}
    </g>
  );
};

export default YAxisTicks;
