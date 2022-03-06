import { render, screen } from '@testing-library/react';
import App from './App';
import React, { createElement } from 'react';
import ReactDom from 'react-dom';

it('it renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<App/>, div)
})
