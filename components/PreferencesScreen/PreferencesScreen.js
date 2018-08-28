import React, { Component } from 'react';
import { View } from 'react-native';
// import PreferencesPage from '../PreferencesPage'


class PreferencesScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        {/*<PreferencesPage navigation={ this.props.navigation }/>*/}
      </View>
    );
  }
}


export default PreferencesScreen;
