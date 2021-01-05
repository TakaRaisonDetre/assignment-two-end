import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import {colors} from '../../styles'
import Header from './components/Header'
import Bookmark from './components/Bookmark'
import Aboutoffer from './components/Aboutoffer'

export default function index({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header/> 

       <View>
           <Bookmark/>
           <Aboutoffer navigation={navigation}/>
       </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.regularBg
    }
});