import { AppRegistry, View} from 'react-native';
import React, { Component } from 'react';
import ButtonEx from './src/components/ButtonEx';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import FlatListNew from './src/components/FlatListNew';

export default class App extends Component {

  render(){
      return(
        <View>
         
          {/* <FlatListNew/> */}
          {/*   BUTTON, INPUT TEXT EXAMPLE  
           <ButtonEx/> */}
           
           {/* */}
             <View>
              <Header headerText={'Album'} />
              <AlbumList/>
            </View> 
         </View>
       );
     }

  
}

AppRegistry.registerComponent('ArvindFirst', () => App);
