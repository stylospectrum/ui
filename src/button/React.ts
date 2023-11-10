import React from 'react';
import {createComponent} from '@lit/react';
import Button from '.';

export default createComponent({
  tagName: 'stylospectrum-button',
  elementClass: Button,
  react: React,
  events: {
    onclick: 'onClick',
  },
});
