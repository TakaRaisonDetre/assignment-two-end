import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {gs, colors} from "../../../styles"

export default function Bookmark() {
    return (
        <View style={styles.bookmark}>
            <Ionicons name="ios-document-text-outline" size={24} color={colors.white}/>
        </View>
    )
}


const styles = StyleSheet.create({
    bookmark:{
        position:"absolute",
        width:56,
        height:56,
        right:32,
        top : -56/2,
        backgroundColor:colors.text,
        ...gs.center,
        borderRadius:56/2,
        zIndex:10
    }
})