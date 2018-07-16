import React from 'react';
import { Text,View,Image } from 'react-native';
import Cart from './Card'
const AlbumItem =(props) => {
return (

     <Cart >
       <Image source={{uri:props.records.thumbnail_image}} style={styles.thumbnailStyle}/>
       <Text> { props.records.title}  </Text>
     </Cart>
);
};

const styles={
  thumbnailStyle:{
    height:50,
    width:100
  }
}

export default AlbumItem;