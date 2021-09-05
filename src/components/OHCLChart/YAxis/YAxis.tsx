import { getTestId } from '@src/utils/appUtil';
import * as React from 'react';
import { IChartData } from '@src/components/OHCLChart/OHCLChart';
import YAxisTicks from '@src/components/OHCLChart/YAxis/YAxisTicks';

const Y_STROKE = '#9da8aa';

interface IYAxis {
  stroke?: string;
  height?: number;
  chartData?: IChartData[];
  axisOffset?: number;
}

const YAxis = (props: IYAxis) => {
  const { stroke = Y_STROKE, height, axisOffset = 0 } = props;

  return (
    <g {...getTestId('y-axis')}>
      <line
        style={{
          stroke,
          strokeWidth: 0.5,
        }}
        {...getTestId('y-axis-line')}
        x1={axisOffset}
        y1={0}
        x2={axisOffset}
        y2={height}
      ></line>
      <YAxisTicks {...props} />
    </g>
  );
};

export default YAxis;
