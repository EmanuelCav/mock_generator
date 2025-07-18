import { ThemeProvider, Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';

import Home from './app/screens/Home';
import Templates from './app/screens/Templates';
import History from './app/screens/History';
import Config from './app/screens/Config';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './app/utils/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Create"
          screenOptions={{
            tabBarActiveTintColor: "#50C878",
            animation: "shift"
          }}>
          <Tab.Screen
            name="Create"
            component={Home}
            options={{
              headerShown: false,
              title: "Create",
              tabBarIcon: ({ color, size }) => (
                <Icon name="plus-circle" type="feather" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Templates"
            component={Templates}
            options={{
              headerShown: false,
              title: "Templates",
              tabBarIcon: ({ color, size }) => (
                <Icon name="layers" type="feather" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              headerShown: false,
              title: "History",
              tabBarIcon: ({ color, size }) => (
                <Icon name="clock" type="feather" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Config"
            component={Config}
            options={{
              headerShown: false,
              title: "Config",
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings" type="feather" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
