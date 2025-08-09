import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard,
  ScrollView,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { ContainerBackgroundPropsType } from "../types/general.types";

import { homeStyles } from "../styles/home.styles";

const ContainerBackground = ({ children, colors, isField }: ContainerBackgroundPropsType) => {
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const windowHeight = Dimensions.get("window").height;
  const tabBarHeight = useBottomTabBarHeight()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        homeStyles.containerBackground,
        { height: Dimensions.get("window").height - tabBarHeight },
        {
          backgroundColor: colors.background === "#121212"
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(0, 0, 0, 0.5)"
        }
      ]}
    >
      {
        isField ?
          <ScrollView
            style={[
              homeStyles.cardBackground,
              {
                flexGrow: 0,
                backgroundColor: colors.background,
                maxHeight: keyboardVisible
                  ? windowHeight / 2
                  : windowHeight / 1.25
              }
            ]}
          >
            {children}
          </ScrollView>
          : <View
            style={[
              homeStyles.cardBackground,
              {
                flexGrow: 0,
                backgroundColor: colors.background,
                maxHeight: keyboardVisible
                  ? windowHeight / 2
                  : windowHeight / 1.25
              }
            ]}
          >
            {children}
          </View>
      }
    </KeyboardAvoidingView>
  );
};

export default ContainerBackground;
