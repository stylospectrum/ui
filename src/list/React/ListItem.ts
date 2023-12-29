import React from 'react';
import {createComponent} from '@lit/react';
import ListItem from '../list-item';

export default createComponent({
  tagName: 'stylospectrum-list-item',
  elementClass: ListItem,
  react: React,
});
