/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import Counter from './src/Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState={
  count: 0
}

 reducer = (state = initialState, action)=> {
  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + 1 }
    case 'DECREMENT':
      return {count: state.count - 1 }

    default:
      return state
  }
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
     <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Counter/>
      </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
