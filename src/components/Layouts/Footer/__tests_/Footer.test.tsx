import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from '@src/components/Layouts/Footer/Footer';
import { getTestId } from '@src/utils/appUtil';

describe('Footer - Specs', () => {
  const renderComponent = () => render(
      <Footer
        {...getTestId('footer')}
        text="Sample footer"
        background="red"
        height={30}
      />,
  );

  it('should render Footer', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('footer')).toBeTruthy();
  });

  it('should render footer with specified text', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('footer')).toBeTruthy();
    expect(getByTestId('footer').innerHTML).toEqual('Sample footer');
  });

  it('should render Footer with specified background', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('footer')).toBeTruthy();
    expect(getByTestId('footer').style.background).toEqual('red');
  });

  it('should render Footer with specified height', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('footer')).toBeTruthy();
    expect(getByTestId('footer').style.height).toEqual('30px');
  });
});
