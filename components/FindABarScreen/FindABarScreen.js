import React, { Component } from 'react';
import { View } from 'react-native';
import FindABarPage from '../FindABarPage'


class FindABarScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <FindABarPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default FindABarScreen;
