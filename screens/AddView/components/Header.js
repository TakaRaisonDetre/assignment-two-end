import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {gs} from '../../../styles'

export default function Header() {
    return (
        <View>
            <Image source={require('../../../assets/header.jpg')} style={{width:"100%", height: 180}}/>
        </View>
    )
}
