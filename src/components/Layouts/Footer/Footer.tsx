import { getTestId } from '@src/utils/appUtil';
import * as React from 'react';
import './Footer.scss';

interface IFooter {
  text: string;
  height?: number;
  background?: string;
}

const Footer = (props: IFooter) => {
  const { text, height = 50, background } = props;
  return (
    <div
      {...getTestId('footer')}
      className="footer"
      style={{ height: `${height}px`, background }}
    >
      {text}
    </div>
  );
};

export default Footer;
