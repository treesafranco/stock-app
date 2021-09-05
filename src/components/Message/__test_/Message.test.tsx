import * as React from 'react';
import { render } from '@testing-library/react';
import Message from '@src/components/Message/Message';
import { getTestId } from '@src/utils/appUtil';

describe('Message - Specs', () => {
  const renderComponent = () => render(
      <Message
        {...getTestId('app-message')}
        text="Error Message"
        color="red"
      />,
  );

  it('should render Message', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-message')).toBeTruthy();
  });

  it('should render Message with specified text', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-message')).toBeTruthy();
    expect(getByTestId('app-message').innerHTML).toEqual('Error Message');
  });

  it('should render Message with specified color', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-message')).toBeTruthy();
    expect(getByTestId('app-message').style.color).toEqual('red');
  });
});
