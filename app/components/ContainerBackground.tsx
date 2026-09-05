import { useEffect, useState } from "react";
import { Dimensions, Keyboard, KeyboardEvent, Modal, Pressable, ScrollView, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { homeStyles } from "../styles/home.styles";

import { ContainerBackgroundPropsType } from "../types/general.types";

const ContainerBackground = ({ children, onClose }: ContainerBackgroundPropsType) => {

  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    const onKeyboardDidShow = (e: KeyboardEvent) => {
      setKeyboardHeight(e.endCoordinates.height);
    };

    const onKeyboardDidHide = () => {
      setKeyboardHeight(0);
    };

    const showSubscription = Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener("keyboardDidHide", onKeyboardDidHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Modal
      visible
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={[
        homeStyles.containerBackground,
        {
          height: Dimensions.get("window").height - keyboardHeight,
          backgroundColor: "rgba(58, 64, 73, 0.5)"
        }
      ]}>
        <View style={[homeStyles.cardBackground, { position: 'relative' }]}>
          <Pressable
            onPress={onClose}
            className="absolute right-3 top-3 z-50 items-center justify-center rounded-full p-2 active:opacity-60"
          >
            <MaterialIcons name="close" size={26} color="#ff0000" />
          </Pressable>
          <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ContainerBackground;