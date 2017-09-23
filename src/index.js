/*
* @Author: Justin Ross
* @Date:   2017-02-18 12:11:01
* @Last Modified by:   Justin Ross
* @Last Modified time: 2017-06-26 14:44:14
*/

/* global document */

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
