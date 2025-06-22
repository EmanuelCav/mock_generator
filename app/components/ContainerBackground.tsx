import { ReactNode } from "react";
import { View, KeyboardAvoidingView, Platform, Dimensions } from "react-native";

import { homeStyles } from "../styles/home.styles";

const ContainerBackground = ({ children }: { children: ReactNode }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        homeStyles.containerBackground,
        { height: Dimensions.get("window").height }
      ]}
    >
      <View style={homeStyles.cardBackground}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ContainerBackground
