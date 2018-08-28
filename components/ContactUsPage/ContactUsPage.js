import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Item, Input, Button, Text, Content } from 'native-base';


class ContactUsPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
          <Container>
            <Content>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item regular>
                <Input placeholder='Leave A Message' />
              </Item>
                <Button full primary>
                <Text>Submit</Text>
              </Button>
            </Content>
          </Container>
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


export default ContactUsPage;

