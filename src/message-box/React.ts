import React from 'react';
import {createComponent} from '@lit/react';
import MessageBox from '.';

export default createComponent({
  tagName: 'stylospectrum-message-box',
  elementClass: MessageBox,
  react: React,
});
