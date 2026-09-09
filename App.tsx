import "./global.css";
import { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdEventType, AppOpenAd, TestIds } from "react-native-google-mobile-ads";

import Home from "./app/screens/Home";
import Templates from "./app/screens/Templates";
import History from "./app/screens/History";
import Config from "./app/screens/Config";

import { useLanguage } from "./app/hooks/useLanguageContext";
import { useThemeMode } from "./app/hooks/useThemeContext";

const Tab = createBottomTabNavigator();

const adUnitId = __DEV__ ? TestIds.APP_OPEN : `${process.env.EXPO_PUBLIC_START}`;

const appOpenAd = AppOpenAd.createForAdRequest(adUnitId);

const LAST_APP_OPEN_AD = "lastAppOpenAd";

const APP_OPEN_COOLDOWN = 3 * 60 * 1000;

const App = () => {

  const { t } = useLanguage();
  const { themeMode } = useThemeMode();

  const isDark = themeMode === "dark";

  const appState = useRef<AppStateStatus>(AppState.currentState);
  const isShowingAd = useRef(false);

  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {

    const loadAd = () => {

      try {

        if (!appOpenAd.loaded) {
          appOpenAd.load();
        }

      } catch (error) {
        console.log(error);
      }

    }

    const unsubscribeLoaded = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
      setIsAdLoaded(true);
    })

    const unsubscribeClosed = appOpenAd.addAdEventListener(AdEventType.CLOSED, () => {
      isShowingAd.current = false;
      setIsAdLoaded(false);
      loadAd()
    })

    const unsubscribeError = appOpenAd.addAdEventListener(AdEventType.ERROR, (error) => {
      console.log(error);
      isShowingAd.current = false;
      setIsAdLoaded(false);
    })

    loadAd();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeError();
    }

  }, [])

  useEffect(() => {

    const handleAppStateChange = async (nextAppState: AppStateStatus) => {

      const previousState = appState.current;
      const isReturningToApp = previousState.match(/inactive|background/) && nextAppState === "active";

      if (isReturningToApp) {

        try {

          const storedCount = await AsyncStorage.getItem("reviewCount");

          const count = storedCount ? parseInt(storedCount, 10) : 0;

          const lastAdShown = await AsyncStorage.getItem(LAST_APP_OPEN_AD);

          const now = Date.now();

          const canShowAd = lastAdShown === null || now - Number(lastAdShown) >= APP_OPEN_COOLDOWN;

          if (count >= 1 && canShowAd && !isShowingAd.current && (appOpenAd.loaded || isAdLoaded)) {
            isShowingAd.current = true;
            await AsyncStorage.setItem(LAST_APP_OPEN_AD, now.toString());
            await appOpenAd.show();
          }

        } catch (error) {
          console.log(error)
          isShowingAd.current = false
        }
      }

      appState.current = nextAppState;

    };

    const subscription = AppState.addEventListener("change", handleAppStateChange);

    return () => {
      subscription.remove();
    };

  }, [isAdLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Create"
          screenOptions={{
            tabBarStyle: {
              backgroundColor:
                isDark
                  ? "#000000"
                  : "#FFFFFF",

              borderTopColor: "transparent",
              elevation: 0,
            },
            tabBarActiveTintColor: "#50C878",
            animation: "shift"
          }}
        >
          <Tab.Screen
            name="Create"
            component={Home}
            options={{
              headerShown: false,
              title: t("create"),
              tabBarIcon: ({ color, size }) => (
                <Feather
                  name="plus-circle"
                  color={color}
                  size={size}
                />
              )
            }}
          />

          <Tab.Screen
            name="Templates"
            component={Templates}
            options={{
              headerShown: false,
              title: t("templates"),
              tabBarIcon: ({ color, size }) => (
                <Feather
                  name="layers"
                  color={color}
                  size={size}
                />
              )
            }}
          />

          <Tab.Screen
            name="History"
            component={History}
            options={{
              headerShown: false,
              title: t("history"),
              tabBarIcon:
                ({ color, size }) => (
                  <Feather
                    name="clock"
                    color={color}
                    size={size}
                  />
                )
            }}
          />

          <Tab.Screen
            name="Config"
            component={Config}
            options={{
              headerShown: false,
              title: t("config"),
              tabBarIcon:
                ({ color, size }) => (
                  <Feather
                    name="settings"
                    color={color}
                    size={size}
                  />
                )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );

};


export default App;