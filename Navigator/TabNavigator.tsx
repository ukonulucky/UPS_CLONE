import { View, Text } from "react-native";
import React, {useLayoutEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreens from "../components/screens/CustomerScreens";
import OrderScreens from "../components/screens/OrderScreens";
import { TabStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { Icon } from '@rneui/themed';




const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();

  const navigation = useNavigation();

useLayoutEffect(() => {
   navigation.setOptions({
      headerShown: false
   })
}, [])


  return (
    <Tab.Navigator screenOptions={({route}) =>(
      {
         tabBarActiveTintColor:"#59C1CC",
         tabBarInactiveTintColor:"gray",
         tabBarIcon: ({color, focused,size}) => {
               if(route.name == "Customers"){
                  return <Icon
                  name="user"
                  type="entypo"
                  color={ focused ? "#59C1CC" : "gray"}
                  
                  />
               }else if(route.name == "Orders"){
                    return <Icon 
                    name="box"
                    type="entypo"
                    color = {focused ? "#59C1CC" : "gray"}
                    />
               }
         }
      }
    )}  >
      <Tab.Screen name="Customers" component={CustomerScreens} />
     <Tab.Screen name="Orders" component={OrderScreens} />
   
    </Tab.Navigator>
  );
};

export default TabNavigator;
