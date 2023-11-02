import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreens from "../components/screens/CustomerScreens";
import OrderScreens from "../components/screens/OrderScreens";
import { TabStackParamList } from "../types";


const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  return (
    <Tab.Navigator>
     <Tab.Screen name="Orders" component={OrderScreens} />
      <Tab.Screen name="Customers" component={CustomerScreens} />
    
    </Tab.Navigator>
  );
};

export default TabNavigator;
