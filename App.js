import React, { Component } from 'react';
import Navigator from './src/navigation';
import { Provider } from 'react-redux';
import Store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}