import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Linking } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import Profile from './pages/main/Profile';
import Home from './pages/home/Home';
import Setting from './pages/setting/Setting';
import { UserProvider } from './context/UserContext';

const Tab = createBottomTabNavigator();

export default function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [maritalStatus, setMaritalStatus] = useState<string>('single');

    return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName ??  'help-circle-outline'} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            title: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}
