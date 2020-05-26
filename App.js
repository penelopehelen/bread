//import library components
import 'react-native-gesture-handler';
import React from 'react';

//import custom components
// custom imports
import { HomeScreen } from './Components/HomeScreen';
import { addNewLoaf } from './Components/addLoafScreen';
import { loafHistory } from './Components/LoafHistoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// start main body of application

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
            activeBackgroundColor: '#231f32',
            inactiveBackgroundColor: '#231f32',
            activeTintColor: 'white',
            inactiveTintColor: '#556353',
            style: {
                // insert style for the icons here?
            },
            keyboardHidesTabBar: true,
            labelPosition: 'beside-icon',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="New Loaf" component={addNewLoaf} />
            <Tab.Screen name="Past Loaves" component={loafHistory} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
