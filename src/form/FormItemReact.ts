import React from 'react';
import {createComponent} from '@lit/react';
import FormItem from './form-item';

export default createComponent({
  tagName: 'stylospectrum-form-item',
  elementClass: FormItem,
  react: React,
});
