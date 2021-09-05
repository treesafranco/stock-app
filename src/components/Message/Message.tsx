import { getTestId } from '@src/utils/appUtil';
import * as React from 'react';
import './Message.scss';

interface IMessage {
    text: string;
    color?: string;
}

const Message = (props: IMessage) => {
  const { color, text } = props;
  return <div {...getTestId('app-message')} className="app-message" style={{ color }}>{text}</div>;
};

export default Message;
