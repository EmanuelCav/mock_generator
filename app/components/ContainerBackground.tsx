import { View, KeyboardAvoidingView, Platform, Dimensions } from "react-native";

import { homeStyles } from "../styles/home.styles";

import { ContainerBackgroundPropsType } from "../types/general.types";

const ContainerBackground = ({ children, colors }: ContainerBackgroundPropsType) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        homeStyles.containerBackground,
        { height: Dimensions.get("window").height },
        {
          backgroundColor: `backgroundColor: ${colors.background === "#3E3E3E" ?
            "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}`
        }
      ]}
    >
      <View style={[homeStyles.cardBackground, { backgroundColor: colors.background }]}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ContainerBackground
