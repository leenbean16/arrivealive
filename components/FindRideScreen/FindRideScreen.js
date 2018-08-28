import React, { Component } from 'react';
import { View } from 'react-native';
import FindRidePage from '../FindRidePage'


class FindRideScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <FindRidePage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default FindRideScreen;
