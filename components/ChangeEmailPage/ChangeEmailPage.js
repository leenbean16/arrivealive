import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';


class ChangeEmailPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
           <Container>
            <Content>
              <Form>
              <Item>
                <Input placeholder="Old Email" />
              </Item>
                <Item>
                  <Input placeholder="New Email" />
                </Item>
                <Item last>
                  <Input placeholder="Confirm New Email" />
                </Item>
                <Button full primary>
                <Text>Submit</Text>
              </Button>
              </Form>
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


export default ChangeEmailPage;

