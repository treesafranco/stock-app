import './Sidebar.scss';
import * as React from 'react';
import { getTestId } from '@src/utils/appUtil';

interface ISidebar {
  items: string[];
  selectedItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar = (props: ISidebar) => {
  const { items, selectedItem, onItemClick } = props;
  return (
    <div {...getTestId('sidebar')} className="sidebar-wrapper">
      {items
        && items.length > 0
        && items.map((item, index) => (
          <div
            key={index}
            className={
              selectedItem === item ? 'sidebar-item active' : 'sidebar-item'
            }
            onClick={() => onItemClick(item)}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
