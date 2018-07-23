/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/Reducers/Index'
import ServiceAction from './src/Actions/ServiceCallAction'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
                <ServiceAction />
            </Provider>
    )
  }
}

