import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import BACCalcPage from '../BACCalcPage';


class BACCalcScreen extends React.Component {
    static navigationOptions = {
    title: 'BAC Calculator',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      	<BACCalcPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 25,
    flex: 1,
    textAlign: 'center',
  },
});

export default BACCalcScreen;

