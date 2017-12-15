import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,TouchableOpacity,Text} from 'react-native';
import ResultDisplay from './ResultDisplay';

export default class ButtonsCalc extends React.Component<{}> {
  constructor(props){
    super(props);
    this.PutValue=this.PutValue.bind(this);
    this.clearScreen=this.clearScreen.bind(this);
    this.state = {totalValue: ''};
  }

  PutValue(value){
    const oldValue = this.state.totalValue;
    const newValue = oldValue + value;
    this.setState({totalValue: newValue});
    this.props.onStateChange && this.props.onStateChange(newValue);
  }

  result(){

  }
  clearScreen(newValue){
    this.props.onStateChange && this.props.onStateChange(newValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.row}>
        <TouchableOpacity style={styles.extra} onPress={this.clearScreen.bind(this,"0")}>
          <View>
            <Text style={styles.text}> C </Text>
          </View>
        </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"7")}>
            <View>
              <Text style={styles.text}> 7 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"4")}>
            <View>
              <Text style={styles.text}> 4 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"1")}>
            <View>
              <Text style={styles.text}> 1 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,",")}>
            <View>
              <Text style={styles.text}> , </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.extra} onPress={this.PutValue.bind(this,"+/-")}>
            <View>
              <Text style={styles.text}> +/- </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"8")}>
            <View>
              <Text style={styles.text}> 8 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"5")}>
            <View>
              <Text style={styles.text}> 5 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"2")}>
            <View>
              <Text style={styles.text}> 2 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"0")}>
            <View>
              <Text style={styles.text}> 0 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.extra} onPress={this.PutValue.bind(this,"%")}>
            <View>
              <Text style={styles.text}> % </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"9")}>
            <View>
              <Text style={styles.text}> 9 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"6")}>
            <View>
              <Text style={styles.text}> 6 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1} onPress={this.PutValue.bind(this,"3")}>
            <View>
              <Text style={styles.text}> 3 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.col1}>
            <View>
              <Text style={styles.text}>   </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={styles.row}>
          <TouchableOpacity style={styles.operation} onPress={this.PutValue.bind(this,"/")}>
            <View>
              <Text style={styles.text}> / </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operation} onPress={this.PutValue.bind(this,"*")}>
            <View>
              <Text style={styles.text}> * </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operation} onPress={this.PutValue.bind(this,"-")}>
            <View>
              <Text style={styles.text}> - </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operation} onPress={this.PutValue.bind(this,"+")}>
            <View>
              <Text style={styles.text}> + </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operation} onPress={this.PutValue.bind(this,"=")}>
            <View>
              <Text style={styles.text}> = </Text>
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
    flexDirection:'row',
    backgroundColor:'#000000'
  },
  row:{
    flex:1,
    flexDirection:'column',
  },
  col1:{
    flex:1,
    backgroundColor:'rgb(114, 114, 114)',
    alignItems:'center',
    justifyContent:'center',
  },
  operation:{
    flex:1,
    backgroundColor:'rgb(255, 158, 24)',
    alignItems:'center',
    justifyContent:'center',
  },
  extra:{
    flex:1,
    backgroundColor:'rgb(191, 191, 191)',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
  },

});

module.exports = ButtonsCalc;
