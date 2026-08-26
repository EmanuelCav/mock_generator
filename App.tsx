import "./global.css"
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import i18n from './i18n';

import Home from './app/screens/Home';
import Templates from './app/screens/Templates';
import History from './app/screens/History';
import Config from './app/screens/Config';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { userStore } from './app/store/user.store';

import { theme } from './app/utils/theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Create"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: userStore.isDarkMode ?
                theme.darkColors?.background :
                theme.lightColors?.background,
              borderTopColor: 'transparent',
              elevation: 0
            },
            tabBarActiveTintColor: "#50C878",
            animation: "shift"
          }}>
          <Tab.Screen
            name="Create"
            component={Home}
            options={{
              headerShown: false,
              title: i18n.t("create"),
              tabBarIcon: ({ color, size }) => (
                <Feather name="plus-circle" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Templates"
            component={Templates}
            options={{
              headerShown: false,
              title: i18n.t("templates"),
              tabBarIcon: ({ color, size }) => (
                <Feather name="layers" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              headerShown: false,
              title: i18n.t("history"),
              tabBarIcon: ({ color, size }) => (
                <Feather name="clock" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Config"
            component={Config}
            options={{
              headerShown: false,
              title: i18n.t("config"),
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App