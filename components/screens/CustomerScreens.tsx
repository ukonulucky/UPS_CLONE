import { useNavigation } from '@react-navigation/native';
import { Image, Input } from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native'





const CustomerScreens = () => {

const navigation  = useNavigation()

const [customer, setCustomer] = useState<string>()
console.log(customer)

useLayoutEffect(() => {
navigation.setOptions({
  headerShown: false
})

}, [])

  return (
    <ScrollView style={{
      backgroundColor: "#59C1CC"
    }}>
  <Image
  source={{
    uri:"https://links.papareact.com/3jc",
  }} 
  style={
   {
    height: 265,
   }
  }
  />

  <View className="bg-white h-16 justify-center">
  <TextInput
  placeholder='Search by Customer'
  onChangeText={(data: string) => {
   setCustomer(data)
  }}
  className="bg-white mx-5 border-solid  py-2 border-gray-400 border-b"

  />
  </View>
    </ScrollView>
  )
}

export default CustomerScreens