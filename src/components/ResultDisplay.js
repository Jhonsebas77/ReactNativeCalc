import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,Text} from 'react-native';

export default class ResultDisplay extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {styles.parent}>
        <Text style={styles.text}>{this.props.display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    backgroundColor:'#000000'
  },
  text: {
    fontSize: 70,
    fontWeight: 'bold',
    color:'#FFFFFF'
  }

});

module.exports = ResultDisplay;
