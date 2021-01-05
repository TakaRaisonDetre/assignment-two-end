import * as React from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import firebase from '../../../config/firebase';

const AddCandidate =(props)=>{
   const {control, register, handleSubmit, errors} = useForm();
   const {navigation} = props
   
   
   const onSubmit =(data)=>{
   console.log(data)

   const dbRef = firebase.firestore().collection('registration');
   dbRef.add(data).then((res)=>{
    navigation.navigate('求人応募中')
   }).catch((err)=>{
       console.log("err found", err);
   });
   }


    return (
    <ScrollView style={styles.container}>
          <View >
              <Text style={styles.label}>氏名</Text>
             <Controller 
             name="fullName" 
             control={control}
             rules={{ required: true }}
             defaultValue=""
             render={({ onChange, onBlur, value })=>(
             <TextInput 
             style={styles.inputGroup}
             onBlur={onBlur}
             onChangeText={(value)=>{
                 onChange(value);
                }}
                />
             )}
             />
             {errors.fullName && <Text style={styles.error}>必須です</Text>}
        </View>
        <View >
            <Text style={styles.label}>メール</Text>
             <Controller 
             name="email" 
             control={control}
             rules={{ required: true }}
             defaultValue=""
             render={({ onChange, onBlur, value })=>(
                <TextInput style={styles.inputGroup}
                onBlur={onBlur}
                onChangeText={(value)=>{
                  onChange(value);
                   }}
                   />
                )}
             />
              {errors.email && <Text style={styles.error}>必須です</Text>}
            
        </View>
        <View>
            <Text style={styles.label}>年齢</Text>
             <Controller 
             name="age" 
             control={control}
             rules={{ required: true }}
             defaultValue=""
             render={({ onChange, onBlur, value })=>(
                <TextInput style={styles.inputGroup}
                onBlur={onBlur}
                onChangeText={(value)=>{
                    onChange(value);
                   }}
                   />
                )}
             />
             {errors.age && <Text style={styles.error}>必須です</Text>}
        </View>
        <View >
        <Text style={styles.label}>性別</Text>
             <Controller 
             name="gender" 
             control={control}
             rules={{ required: true }}
             defaultValue=""
             render={({ onChange, onBlur, value })=>(
                <TextInput style={styles.inputGroup}
                onBlur={onBlur}
                onChangeText={(value)=>{
                    onChange(value);
                   }}
                   />
                )}
             />
             {errors.gender && <Text style={styles.error}>必須です</Text>}
        </View>
        <View >
         <Text style={styles.label}>応募理由</Text>
             <Controller 
             name="reason" 
             control={control}
             rules={{ required: true }}
             defaultValue=""
             render={({ onChange, onBlur, value })=>(
                <TextInput style={styles.inputGroup}
                onBlur={onBlur}
                multiline={true}
                numberOfLines={3}
                onChangeText={(value)=>{
                    onChange(value);
                   }}
                   />
                )}
             />
             {errors.reason && <Text style={styles.error}>必須です</Text>}
        </View>
        <View style={styles.button}>
        <TouchableOpacity 
            title="Go to Entry"
            onPress={handleSubmit(onSubmit)}
            style={styles.applybutton}>
                <Text>応募する</Text>
            </TouchableOpacity>
          </View>
     </ScrollView>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        marginTop: 18,
        height:250
      },
    inputGroup: {
        flex: 1,
        height:38,
        padding: 5,
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor:'#EBECF0',
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
      
    },
    label: {
    marginLeft:10,
    marginBottom:3,
    },
    error:{
        color:'red'
    }
  })

export default AddCandidate;