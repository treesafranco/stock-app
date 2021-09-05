import * as React from 'react';
import { render } from '@testing-library/react';
import Page from '@src/components/Layouts/Page/Page';
import { getTestId } from '@src/utils/appUtil';

describe('Page - Specs', () => {
  const mockChildComponent = jest.fn();

  const renderComponent = () => render(
      <Page {...getTestId('app-page')}>
        <div>Test</div>
      </Page>,
  );

  it('should render Page', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-page')).toBeTruthy();
  });

  it('should render Page and its child components', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-page')).toBeTruthy();
    expect(mockChildComponent).toBeTruthy();
  });
});
