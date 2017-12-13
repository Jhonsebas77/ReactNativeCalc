import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,TouchableOpacity,Text} from 'react-native';
import ResultDisplay from './ResultDisplay';

export default class ButtonsCalc extends React.Component<{}> {
  constructor(props){
    super(props);
    this.plus=this.plus.bind(this);
    this.state = {totalValue: ''};
  }

plus(value){
  const oldValue = this.state.totalValue;
  const newValue = oldValue + value;
  this.setState({totalValue: newValue});
  this.props.onStateChange && this.props.onStateChange(newValue);
}

  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"1")}>
            <View>
              <Text style={styles.text}> 1 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"4")}>
            <View>
              <Text style={styles.text}> 4 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"7")}>
            <View>
              <Text style={styles.text}> 7 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"2")}>
            <View>
              <Text style={styles.text}> 2 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"5")}>
            <View>
              <Text style={styles.text}> 5 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"8")}>
            <View>
              <Text style={styles.text}> 8 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"3")}>
            <View>
              <Text style={styles.text}> 3 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"6")}>
            <View>
              <Text style={styles.text}> 6 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"9")}>
            <View>
              <Text style={styles.text}> 9 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"+")}>
            <View>
              <Text style={styles.text}> + </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"-")}>
            <View>
              <Text style={styles.text}> - </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"=")}>
            <View>
              <Text style={styles.text}> = </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.plus.bind(this,"0")}>
            <View>
              <Text style={styles.text}> 0 </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    padding:2,
    flexDirection:'row',
  },
  row:{
    flex:1,
    flexDirection:'column',
  },
  col1:{
    flex:1,
    backgroundColor:'rgb(26,164,147)',
    backgroundColor:'rgb(231,206,144)',
    borderWidth:2,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
  },

});

module.exports = ButtonsCalc;
