import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import OHCLChart from '@src/components/OHCLChart/OHCLChart';
import { getTestId } from '@src/utils/appUtil';
import { mockData } from './mock';

describe('OHCLChart - Specs', () => {
  const renderComponent = () => render(
      <OHCLChart
        chartData={mockData.chartData}
        height={300}
        {...getTestId('ohcl-chart')}
      />,
  );

  it('should render the chart', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ohcl-chart')).toBeTruthy();
  });

  it('should render the chart with specified height', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ohcl-chart')).toBeTruthy();
    expect(getByTestId('ohcl-chart').style.height).toBe('300px');
  });

  it('should render all data points in the specified data', () => {
    const { getByTestId } = renderComponent();

    setTimeout(() => {
      expect(getByTestId('ohcl-chart')).toBeTruthy();
      expect(getByTestId('ohcl-chart').querySelectorAll('.bar').length).toBe(
        mockData.chartData.length,
      );
    }, 500);
  });
});
