import React from 'react';
import {createComponent} from '@lit/react';
import MenuButton from '.';

export default createComponent({
  tagName: 'stylospectrum-menu-button',
  elementClass: MenuButton,
  react: React,
  events: {
    onButtonClick: 'button-click',
    onArrowClick: 'arrow-click',
  },
});
