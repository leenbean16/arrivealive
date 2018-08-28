import React, { Component } from 'react';
import { StyleSheet, ScrollView, Button, Text } from 'react-native';


class AccountInfoPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
          <Text style={styles.text}>Account Info</Text>
	      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    text: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    },
});


export default AccountInfoPage;

