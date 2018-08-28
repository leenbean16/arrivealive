import React, { Component } from 'react';
import { View } from 'react-native';
import CurrentTabPage from '../CurrentTabPage'


class CurrentTabScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <CurrentTabPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default CurrentTabScreen;
