import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//test pt 3
//test pt 2
//Screens

import Home from './screens/home'
import Monitoring from './screens/monitoring'
import Profile from './screens/profile'

// Screen name
const HomeName = 'Home' ; 
const MonitoringName = 'Monitoring' ;
const ProfileName = 'Profile' ;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function StackScreen() { 
//     return(
//         <Stack.Navigator>
//             <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
//             <Stack.Screen options={{headerTransparent:true,headerBackTitleVisible:false, title: null}} name="Lender" component={Lender}/>
//         </Stack.Navigator>
//     )
// }

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HomeName}
                screenOptions={({ route }) => ({
                headerShown: false, // Hide the screen names from the header
                tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === HomeName) {
                            iconName = focused ? 'home-outline' : 'home'
                        } else if (rn === MonitoringName) {
                            iconName = focused ? 'videocam-outline' : 'videocam'
                        } else if (rn === ProfileName) {
                            iconName = focused ? 'person-circle-outline' : 'person-circle'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'grey',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 60 },
                })}
                >

                <Tab.Screen name={HomeName} component={Home}/>
                <Tab.Screen name={MonitoringName} component={Monitoring}/>
                <Tab.Screen name={ProfileName} component={Profile}/>

            </Tab.Navigator> 

        </NavigationContainer>
    )
}