import React, { Component } from 'react';
import { View } from 'react-native';
// import ReferAFriendPage from '../ReferAFriendPage'


class ReferAFriendScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        {/*<ReferAFriendPage navigation={ this.props.navigation }/>*/}
      </View>
    );
  }
}


export default ReferAFriendScreen;
