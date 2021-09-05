import * as React from 'react';
import { render } from '@testing-library/react';
import { getTestId } from '@src/utils/appUtil';
import XAxis from '@src/components/OHCLChart/XAxis/XAxis';

describe('XAxis - Specs', () => {
  const renderComponent = () => render(
      <XAxis
        stroke={'red'}
        height={300}
        width={400}
        {...getTestId('x-axis-line')}
      />,
  );

  it('should render the XAxis', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('x-axis-line')).toBeTruthy();
  });

  it('should render the XAxis with specified stroke color', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('x-axis-line').style.stroke).toBe('red');
  });

  it('should render the XAxis with specified width', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('x-axis-line').getAttribute('x1')).toBe('0');
    expect(getByTestId('x-axis-line').getAttribute('y1')).toBe('300');
    expect(getByTestId('x-axis-line').getAttribute('x2')).toBe('400');
    expect(getByTestId('x-axis-line').getAttribute('y2')).toBe('300');
  });
});
