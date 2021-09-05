import { getTestId } from '@src/utils/appUtil';
import * as React from 'react';

const X_STROKE = '#9da8aa';

interface IXAxis {
  stroke?: string;
  height?: number;
  width?: number;
  axisOffset?: number;
}

const XAxis = (props: IXAxis) => {
  const {
    stroke = X_STROKE, axisOffset = 0, height, width,
  } = props;

  return (
    <line
      {...getTestId('x-axis-line')}
      style={{
        stroke,
        strokeWidth: 1,
      }}
      x1={axisOffset}
      y1={height}
      x2={width}
      y2={height}
    ></line>
  );
};

export default XAxis;
