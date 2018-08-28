import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Form, Item, Input, Content, Button, Text } from 'native-base';


class ChangePasswordPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
           <Container>
            <Content>
              <Form>
              <Item>
                <Input placeholder="Old Password" />
              </Item>
                <Item>
                  <Input placeholder="New Password" />
                </Item>
                <Item last>
                  <Input placeholder="Confirm New Password" />
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


export default ChangePasswordPage;

