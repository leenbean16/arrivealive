import React, { Component } from 'react';
import { View } from 'react-native';


class SignInScreen extends React.Component {
    static navigationOptions = {
    title: 'Sign Up Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
        hi
      </View>
    );
  }
}


export default SignInScreen;
