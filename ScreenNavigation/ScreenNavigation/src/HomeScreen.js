
import React, {Component} from 'react';
import {Text,Button, View} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
      };

    render() {
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
         
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />

        <Button
            title="Send data"
            onPress={() => this.props.navigation.navigate(
                'Details', 
                {itemId: 86, otherParam: 'My Second Screen'}
            )}
          />
        </View>
      );
    }
  }