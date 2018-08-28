import React, { Component } from 'react';
import { View } from 'react-native';
import HistoryPage from '../HistoryPage'


class HistoryScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <HistoryPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default HistoryScreen;
