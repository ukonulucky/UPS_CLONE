import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

const RootNavigator = () => {
const RootStack = createNativeStackNavigator<RootStackParamList>()


  return (
     <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen
            name="customer" component={TabNavigator}
            />
        </RootStack.Group>
     </RootStack.Navigator>
  )
}

export default RootNavigator