import React, { Component } from 'react';
import { View } from 'react-native';
// import NotificationsPage from '../NotificationsPage'


class NotificationsScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        {/*<NotificationsPage navigation={ this.props.navigation }/>*/}
      </View>
    );
  }
}


export default NotificationsScreen;
