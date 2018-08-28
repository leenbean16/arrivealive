import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import AccountInfoPage from '../AccountInfoPage';


class AccountInfoScreen extends React.Component {
      static navigationOptions = {
    title: 'Account Info',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      	<AccountInfoPage navigation={ this.props.navigation }/>
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

export default AccountInfoScreen;

