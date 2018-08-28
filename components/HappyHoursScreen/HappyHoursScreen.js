import React, { Component } from 'react';
import { View } from 'react-native';
// import HappyHoursPage from '../HappyHoursPage'


class HappyHoursScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        {/*<HappyHoursPage navigation={ this.props.navigation }/>*/}
      </View>
    );
  }
}


export default HappyHoursScreen;
