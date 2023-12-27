import React from 'react';
import {createComponent} from '@lit/react';
import PopoverListItem from '../list-item';

export default createComponent({
  tagName: 'stylospectrum-popover-list-item',
  elementClass: PopoverListItem,
  react: React,
});
