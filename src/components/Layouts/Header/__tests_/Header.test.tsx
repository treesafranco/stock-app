import * as React from 'react';
import { render } from '@testing-library/react';
import Header from '@src/components/Layouts/Header/Header';
import { getTestId } from '@src/utils/appUtil';

describe('Header - Specs', () => {
  const renderComponent = () => render(
      <Header {...getTestId('header')} title="Sample Header" height={30} />,
  );

  it('should render Header', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('header')).toBeTruthy();
  });

  it('should render Header with specified text', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('header').innerHTML).toEqual('Sample Header');
  });

  it('should render Header with specified height', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('header').style.height).toEqual('30px');
  });
});
