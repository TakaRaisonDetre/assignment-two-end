import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import {colors} from '../../styles'
import Header from './components/Header'
import Bookmark from './components/Bookmark'
import Dataentry from './components/Dataentry'
import AddCandidate from './components/Addcandidate'

export default function index({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header/> 
       <View>
       <Bookmark/>
       </View>
       <AddCandidate navigation={navigation}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.regularBg
    },
   
});