import { StatusBar } from 'expo-status-bar';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ScrollView} from 'react-native'
import AddView from './screens/AddView'
import DataEntry from './screens/DataEntry'


const AppStack = createStackNavigator();

function EntryStack() {
  return (
    <AppStack.Navigator mode="modal">
      <AppStack.Screen name="求人応募中" component={AddView} option={{title: '求人応募中'}}/>
      <AppStack.Screen name="応募申請" component={DataEntry} option={{title: '応募申請'}}/>
    </AppStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
    
     <EntryStack/>
   
    </NavigationContainer>
   
  );
}
