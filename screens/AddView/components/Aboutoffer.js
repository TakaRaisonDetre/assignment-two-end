import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {gs, colors} from '../../../styles'


const  OfferContent ={
    compnay:"OXOX商事",
    salary:"月給　150,000円",
    jobTitle : "一般事務職", 
    location: "東京都渋谷区",
    about: "綺麗なオフィスでの一般事務のお仕事です。エクセル・ワードなどを得意としてコミュニケーション力の高い方に秘書と一般事務をお任せいたします。"
}


const  Aboutoffer=({navigation})=> {
  
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{OfferContent.compnay}</Text>
            <Text style={styles.info}>{OfferContent.salary}</Text>
            <Text style={styles.info}>{OfferContent.location}</Text>
            <View style={gs.divider}/>
            <Text style={gs.sectionTitle}>職務内容：{OfferContent.about}</Text>

            <TouchableOpacity 
            title="Go to Entry"
            onPress={()=>navigation.navigate("応募申請")}
            style={styles.applybutton}>
                <Text style={styles.applyButtonText}>応募する</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Aboutoffer

const styles = StyleSheet.create({
    container:{
        ...gs.sectionContainer,
        backgroundColor:colors.darkBg
    },
    info:{
        color: colors.textSec,
        fontWeight:'600',
        marginTop:4
    },
    applybutton:{
        backgroundColor: '#77c3ec',
        padding: 8,
        height:40,
        borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
        marginTop:45
    },
    applyButtonText:{
        color: '#fff',
        fontWeight:'600',
      
    }
})