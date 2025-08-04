import { useEffect, useState } from 'react';
import { ThemeProvider, Icon } from '@rneui/themed';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import i18n from './i18n';
import mobileAds, { AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

import Home from './app/screens/Home';
import Templates from './app/screens/Templates';
import History from './app/screens/History';
import Config from './app/screens/Config';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { userStore } from './app/store/user.store';

import { theme } from './app/utils/theme';
import { isFirstOpen, setFirstOpenFlag } from './app/utils/firstOpen';

const Tab = createBottomTabNavigator();

// const adUnitId = __DEV__ ? TestIds.APP_OPEN : `${process.env.EXPO_PUBLIC_START}`;
const adUnitId = TestIds.APP_OPEN

const App = observer(() => {
  
  const [_, forceRender] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    forceRender((prev) => prev + 1);
  }, [userStore.lang])


  useEffect(() => {
    const init = async () => {
      await mobileAds().initialize();

      const firstTime = await isFirstOpen();

      if (!firstTime) {

        const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
          keywords: ['fashion', 'clothing'],
        })

        appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
          appOpenAd.show();
        })

        appOpenAd.load();

      } else {
        await setFirstOpenFlag();
      }

      setReady(true);
    }

    init()

  }, [])

  if (!ready) return null;

  return (
    <ThemeProvider theme={theme}>
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
                <Icon name="plus-circle" type="feather" color={color} size={size} />
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
                <Icon name="layers" type="feather" color={color} size={size} />
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
                <Icon name="clock" type="feather" color={color} size={size} />
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
                <Icon name="settings" type="feather" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
})

export default App