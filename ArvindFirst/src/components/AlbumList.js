import React, {Component} from 'react';
import { View} from 'react-native';
import axios from 'axios';
import AlbumItem from './AlbumItem';

class AlbumList extends Component{

    componentWillMount(){
       
        console.log("XYZ");
        this.state={ albums:[] } ;

        console.log('componentWillUnmount called');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums ')
        .then(response => this.setState( {albums:response.data} ));
    }

renderAlbums(){

    return this.state.albums.map( album =>
        < AlbumItem key={album.title} records={album} />
      ); 
}

render(){
    return(
        <View>
         {this.renderAlbums()}
        </View>

    );
  }
}

export default AlbumList;