//Import library
import React from 'react';
import { Text,View } from 'react-native';

const Header =(props) => {
    // const {textStyle,viewStyle }=styles;
   
return (
    // <Text style={textStyle}>Album</Text>
     <View style= {styles.viewStyle}>
       <Text style={styles.textStyle}> { props.headerText }  </Text>
     </View>
)
}

const styles = {
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8D5',
        shadowColor:'#000',
        paddingTop:15,
        height:60,
        shadowOffset:{ width:0, height:10},
        shadowOpacity:0.9
    },
    textStyle:{
        fontSize:30
    }
};

export default Header;