import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Input, Item, ListItem, Right, Radio } from 'native-base';
// importing grid to split page in half
import { Col, Row, Grid } from 'react-native-easy-grid';


class BACCalcPage extends React.Component {
    constructor(props) {
    super(props);
    // state for beer / checking for check
    this.state = {
      beer: true,
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      // 2 columns
        <ScrollView>
      {/*Radio buttons for picking liquor type*/}
          <Grid>
        {/*first column*/}
            <Col style={{ backgroundColor: '#FFFFFF', height: 610, }}>
          
          <ListItem>
            <Text>Beer</Text>
            <Right>
              <Radio selected={this.state.beer} onPress={()=>{this.setState({selected: !this.state.beer})}}/>
            </Right>
          </ListItem>
          
          <ListItem>
            <Text>Liquor</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          
          <ListItem>
            <Text>Wine</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>

        {/*alcohol percentage field*/}
            <Item regular>
              <Input placeholder='Alcohol %' />
            </Item>

          {/*#of servings*/}
            <Item regular>
              <Input placeholder='Total servings:' />
            </Item>
          <ListItem>
            <Text>Can(s) (12 oz)</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem> 

          <ListItem>
            <Text>Pint(s) (16oz)</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem> 

          <ListItem>
            <Text>Shot(s) (1,5oz)</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem> 

          <ListItem>
            <Text>Glass(es) (5oz)</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem> 

          <ListItem>
            <Text>Ounces</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Text>Milileters</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>

            </Col>

          {/*second column*/}
            <Col style={{ backgroundColor: '#00CE9F', height: 610, }}>


            <Text style={styles.text}>Your BAC is: </Text>            

            </Col>
          </Grid>	      
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


export default BACCalcPage;

