import React, { Component } from 'react';
import { View } from 'react-native';
import SettingsPage from '../SettingsPage'


class SettingsScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <SettingsPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default SettingsScreen;
