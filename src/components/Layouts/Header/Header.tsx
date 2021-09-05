import './Header.scss';
import * as React from 'react';
import { getTestId } from '@src/utils/appUtil';

interface IHeader {
  title: string;
  height?: number;
}

const Header = (props: IHeader) => {
  const { title, height = 30 } = props;
  return (
    <div
      {...getTestId('header')}
      className="header"
      style={{ height: `${height}px` }}
    >
      {title}
    </div>
  );
};

export default Header;
