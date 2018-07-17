

import React, {Component} from 'react';
import {Text,Button, View} from 'react-native';
import {createStackNavigator } from 'react-navigation';


export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation})=>{
        return{
            title: navigation.getParam('otherParam', 'Default Details Screen'),
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        };
      };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text>Details Screen</Text>
        <Text> itemId: {itemId}</Text>
        <Text>otherParam: {otherParam}</Text>
        
         <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
          />

         <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

         <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        
        </View>
      );
    }
  }
  