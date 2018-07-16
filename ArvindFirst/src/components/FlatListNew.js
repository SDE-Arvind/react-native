
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

class FlatListNew extends Component{

    constructor(props) {
      super(props);    
       this.state = { isLoading: true }
    }


    componentDidMount() {
    
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        
        }, 
        function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }


    GetFlatListItem (title) {
   
    Alert.alert(title);

    }
    
    render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    console.log(this.state.dataSource);
    return (
        <View >
   
               <FlatList
                  data={ this.state.dataSource }
                  
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                 
                  renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.title)} > {item.title} </Text>}
                  
                  keyExtractor={(item, index) => index.toString()}
                />       
        </View>
        ) ;
 
    }
}

const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
     
    },
     
    FlatListItemStyle: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
     
    });

 
export default FlatListNew;