import {CompositeNavigationProp} from "@react-navigation/native"
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

export type  TabStackParamList =  {
    Customers: undefined,
    Orders: undefined
 }

export type RootStackParamList = {
    Main: undefined
    MyModal: { userId: string, name: string }
    order: {
        order: any
    },
    customer:{
        customer: any
    }

}


export type CustomerScreenNavigationProps = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Customers">,
NativeStackNavigationProp<RootStackParamList>
>