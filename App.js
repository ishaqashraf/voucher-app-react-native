import React, { Component } from 'react';
import Navigator from './src/navigation';
import { Provider } from 'react-redux';
import Store from './src/store'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}