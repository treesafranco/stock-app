import * as React from 'react';
import { render } from '@testing-library/react';
import { getTestId } from '@src/utils/appUtil';
import YAxis from '@src/components/OHCLChart/YAxis/YAxis';
import * as selector from '@src/components/OHCLChart/Utils';
import { mockData } from './mock';
import '../Utils';

describe('YAxis - Specs', () => {
  jest.mock('../Utils');

  const result = {
    min: 10,
    max: 100,
  };
  const xxx = jest.spyOn(selector, 'getMinMaxValues');
  xxx.mockImplementation(() => result);

  const renderComponent = () => render(
      <YAxis
        stroke={'red'}
        height={300}
        {...getTestId('y-axis-line')}
        chartData={mockData.chartData}
      ></YAxis>,
  );

  it('should render the YAxis', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('y-axis-line')).toBeTruthy();
  });

  it('should render the YAxis with specified stroke color', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('y-axis-line').style.stroke).toBe('red');
  });

  it('should render the YAxis with specified width', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('y-axis-line').getAttribute('x1')).toBe('0');
    expect(getByTestId('y-axis-line').getAttribute('y1')).toBe('0');
    expect(getByTestId('y-axis-line').getAttribute('x2')).toBe('0');
    expect(getByTestId('y-axis-line').getAttribute('y2')).toBe('300');
  });
});
