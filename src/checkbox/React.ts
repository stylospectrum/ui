import React from 'react';
import {createComponent} from '@lit/react';
import Checkbox from '.';

export default createComponent({
  tagName: 'stylospectrum-checkbox',
  elementClass: Checkbox,
  react: React,
  events: {
    onChange: 'change',
  },
});
