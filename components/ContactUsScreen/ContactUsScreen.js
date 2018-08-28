import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ContactUsPage from '../ContactUsPage';


class ContactUsScreen extends React.Component {
    static navigationOptions = {
    title: 'Contact Us',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      	<ContactUsPage navigation={ this.props.navigation }/>
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

export default ContactUsScreen;

