import React, {Component} from 'react';
import {Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </View>
    );
  }
}