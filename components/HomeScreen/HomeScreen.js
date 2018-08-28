import React, { Component } from 'react';
import { View } from 'react-native';
import HomePage from '../HomePage'


class HomeScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <HomePage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default HomeScreen;
