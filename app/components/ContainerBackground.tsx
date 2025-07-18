import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard
} from "react-native";

import { homeStyles } from "../styles/home.styles";
import { ContainerBackgroundPropsType } from "../types/general.types";

const ContainerBackground = ({ children, colors }: ContainerBackgroundPropsType) => {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        homeStyles.containerBackground,
        { height: windowHeight },
        {
          backgroundColor: colors.background === "#121212"
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(0, 0, 0, 0.5)"
        }
      ]}
    >
      <View
        style={[
          homeStyles.cardBackground,
          {
            backgroundColor: colors.background,
            maxHeight: keyboardVisible
              ? windowHeight / 2
              : windowHeight / 1.125
          }
        ]}
      >
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ContainerBackground;
