import React from 'react';
import {createComponent} from '@lit/react';
import MenuItem from '../menu-item';

export default createComponent({
  tagName: 'stylospectrum-menu-item',
  elementClass: MenuItem,
  react: React,
});
