import React, { Component } from 'react';
import { View } from 'react-native';
import UserHomePage from '../UserHomePage'


class UserHomeScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        <UserHomePage navigation={ this.props.navigation }/>
      </View>
    );
  }
}


export default UserHomeScreen;
