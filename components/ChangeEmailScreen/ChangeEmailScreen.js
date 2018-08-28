import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ChangeEmailPage from '../ChangeEmailPage';


class ChangeEmailScreen extends React.Component {
      static navigationOptions = {
    title: 'Change Email',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      	<ChangeEmailPage navigation={ this.props.navigation }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 25,
    flex: 1,
    width: null,
    height: null,
    color: '#000000',
    textAlign: 'center',
  },
});

export default ChangeEmailScreen;

