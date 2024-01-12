import React from 'react';
import {createComponent} from '@lit/react';
import Textarea from '.';

export default createComponent({
  tagName: 'stylospectrum-textarea',
  elementClass: Textarea,
  react: React,
  events: {
    onChange: 'change',
  },
});
