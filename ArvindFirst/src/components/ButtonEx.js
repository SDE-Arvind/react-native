import { Alert , Text, TextInput, View, Button} from 'react-native';
import React, { Component } from 'react';

class ButtonEx extends Component{

    constructor(props){
        super(props)
        this.state = {text: ''};
    }
 
    onPressLearnMore() {
         console.log(this.state.text)
          Alert.alert('you tapped on button')
      }
    
    
      render() {
        return (
          <View style={{padding: 10}}>
    
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
    
          <Button
                 testID=" myButton"
                 onPress={() => this.onPressLearnMore() }
                 title="Submit"
                 color="#841584"
                 accessibilityLabel="Learn more about this purple button"/>
        </View>
        );
      }

}

export default ButtonEx;