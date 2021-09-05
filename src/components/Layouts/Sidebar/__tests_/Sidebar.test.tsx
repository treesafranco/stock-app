import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Sidebar from '@src/components/Layouts/Sidebar/Sidebar';
import { getTestId } from '@src/utils/appUtil';

describe('Sidebar - Specs', () => {
  const items = ['One', 'Two', 'Three'];
  const onItemClick = jest.fn();

  const renderComponent = () => render(
      <Sidebar
        {...getTestId('sidebar')}
        items={items}
        selectedItem={items[0]}
        onItemClick={onItemClick}
      />,
  );

  it('should render Sidebar', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('sidebar')).toBeTruthy();
  });

  it('should render Sidebar with specified items', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('sidebar');
    expect(component).toBeTruthy();
    expect(component.children.length).toEqual(items.length);
  });

  it('should render the selected item as active element', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('sidebar');
    expect(component).toBeTruthy();
    expect(component.children[0].classList[1]).toEqual('active');
  });

  it('clicking on an item should call the onItemClick function', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('sidebar');
    expect(component).toBeTruthy();
    fireEvent.click(component.children[2]);
    expect(onItemClick).toHaveBeenCalled();
  });
});
