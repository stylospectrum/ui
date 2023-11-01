import React from 'react';
import {createComponent} from '@lit/react';
import StylospectrumButton from '.';

export default createComponent({
  tagName: 'stylospectrum-button',
  elementClass: StylospectrumButton,
  react: React,
  events: {
    onclick: 'onClick',
  },
});
