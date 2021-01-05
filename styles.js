import {StyleSheet} from 'react-native'


export const colors ={
    regularBg : "#ffffff",
    lightBg: "#b0c4de",
    darkHl: "#c0c0c0",
    lightHl:"#f5f5f5",
    green:"#2f4f4f",
    white:"#fff",
    text:"#696969",
    textSec:"#aaa"
};

export const gs = StyleSheet.create({
    sectionContainer:{
     paddingVertical:24,
     paddingHorizontal:32,
     marginBottom:5,
     backgroundColor:colors.lightBg
  },
    rowCenter: {
       flexDirection: 'row',
       alignItems:'center'
   },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    center :{
        alignItems:'center',
        justifyContent:'center'
    },
    divider:{
        borderBottomColor:"#8d8d8d",
        borderBottomWidth:1,
        marginVertical:24
    },
    title :{
          color:colors.text,
          fontSize:30,
    },
})