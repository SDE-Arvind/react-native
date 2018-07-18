import React from 'react'
import {Alert,Button,View,Text} from 'react-native'
import { connect } from 'react-redux'

class Counter extends React.Component {
  
  increment = () => {

    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    if(this.props.count==0 )
    Alert.alert("can decrease")
    else
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <View>
        <Text>Counter</Text>
        <View>
          <Button onPress={this.decrement} title="-"></Button>
          <Text>{this.props.count}</Text>
          <Button title="+" onPress={this.increment}></Button>
        </View>
      </View>
    )
  }
}

 mapStateToProps=(state) =>{
    return {
      count: state.count
    }
  }

export default connect(mapStateToProps) (Counter)