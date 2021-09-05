import './Page.scss';
import * as React from 'react';
import { getTestId } from '@src/utils/appUtil';

interface IPage {
  children?: React.ReactNode;
}

const Page = (props: IPage) => {
  const { children } = props;
  return (
    <div {...getTestId('app-page')} className="page">
      {children}
    </div>
  );
};

export default Page;
