

import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, ScrollView, ActivityIndicator, View , TouchableOpacity} from 'react-native';
import firebase from '../../../config/firebase';

class DataEntry extends Component {



constructor(){
    super();
    this.dbRef=firebase.firestore().collection('registration');
    this.state={
        fullName:'',
        email:'',
        age:'',
        gender:'',
        reason:'',
        isLoading: false
    }
}

onChangeInputUpdate=(val, prop)=>{
    const state = this.state;
    state[prop] = val;
    this.setState(state);
}

storeApplicants=()=>{
    if(this.state.fullName=== ''){
        alert('お名前が入力されていません!')
       } else {
         this.setState({
           isLoading: true,
         });      
         this.dbRef.add({
           fullName: this.state.fullName,
           email: this.state.email,
           age: this.state.age,
           gender:this.state.gender,
           reason:this.state.reason
         }).then((res) => {
           this.setState({
             fullName: '',
             email: '',
             age: '',
             gender: '',
             reason: '',
             isLoading: false,
           });
           this.props.navigation.navigate('求人応募中')
         })
         .catch((err) => {
           console.error("Error found: ", err);
           this.setState({
             isLoading: false,
           });
         });
       }
}

render(){
    if(this.state.isLoading){
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
        )
    }
    return (
    
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'お名前'}
              value={this.state.fullName}
              onChangeText={(val) => this.onChangeInputUpdate(val, 'fullName')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              
              placeholder={'メール'}
              value={this.state.email}
              onChangeText={(val) => this.onChangeInputUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'ご年齢'}
              value={this.state.age}
              onChangeText={(val) => this.onChangeInputUpdate(val, 'age')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'性別'}
              value={this.state.gender}
              onChangeText={(val) => this.onChangeInputUpdate(val, 'gender')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'応募理由'}
              multiline={true}
              numberOfLines={4}
              value={this.state.reason}
              onChangeText={(val) => this.onChangeInputUpdate(val, 'reason')}
          />
        </View>
        <View style={styles.button}>
        
          <TouchableOpacity 
            title="Go to Entry"
            onPress={() => this.storeApplicants()} 
            style={styles.applybutton}>
                <Text style={styles.applyButtonText}>応募する</Text>
            </TouchableOpacity>

        </View>
      </ScrollView>
     

    )
}

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      marginTop: 18,
      height:250
    },
    inputGroup: {
      flex: 1,
      padding: 5,
      marginBottom: 25,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
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

export default DataEntry;