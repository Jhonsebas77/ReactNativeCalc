/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ResultDisplay from './src/components/ResultDisplay';
import ButtonsCalc from './src/components/ButtonsCalc';

export default class App extends Component<{}> {

  constructor(props){
  super(props);
  this.onButtonStateChange = this.onButtonStateChange.bind(this);
  this.state = {value: ''};
}

onButtonStateChange(newValue) {
  const v = newValue;
  this.setState({value:v});
}
  render() {
    return (
      <View style = {styles.parent}>
        <ResultDisplay display={this.state.value}/>
        <ButtonsCalc onStateChange={this.onButtonStateChange}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column'
  },
});
