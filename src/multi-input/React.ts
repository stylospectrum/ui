import React from 'react';
import {createComponent} from '@lit/react';
import MultiInput from '.';

export default createComponent({
  tagName: 'stylospectrum-multi-input',
  elementClass: MultiInput,
  react: React,
  events: {
    onTokenDelete: 'token-delete',
    onEnter: 'enter',
  },
});
