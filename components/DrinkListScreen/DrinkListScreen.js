import React, { Component } from 'react';
import { View } from 'react-native';
// import DrinkListPage from '../DrinkListPage'


class DrinkListScreen extends React.Component {
    static navigationOptions = {
    title: 'Current Tab',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        {/*<DrinkListPage navigation={ this.props.navigation }/>*/}
      </View>
    );
  }
}


export default DrinkListScreen;
