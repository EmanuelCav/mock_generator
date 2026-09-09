import { useEffect, useState } from "react";
import { Dimensions, Keyboard, KeyboardEvent, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ContainerBackgroundPropsType } from "../types/general.types";

import { useThemeMode } from "../hooks/useThemeContext";

const ContainerBackground = ({ children, onClose, title }: ContainerBackgroundPropsType) => {

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const { themeMode } = useThemeMode();

  const isDark = themeMode === "dark";

  useEffect(() => {
    const keyboardShow =
      Keyboard.addListener(
        "keyboardDidShow",
        (event: KeyboardEvent) => {
          setKeyboardHeight(
            event.endCoordinates.height
          );

        }
      );

    const keyboardHide =
      Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setKeyboardHeight(0);
        }
      );

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  const screenHeight = Dimensions.get("screen").height;

  return (
    <Modal
      visible
      transparent
      animationType="fade"
      statusBarTranslucent
    >

      <View
        className="items-center justify-center bg-black/60 px-4"
        style={{
          height: screenHeight - keyboardHeight,
        }}
      >

        <View
          className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900"
          style={{
            maxHeight: screenHeight - keyboardHeight - 118,
          }}
        >

          <View className="flex-row items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">

            <Text className="text-lg font-bold text-black dark:text-white">
              {title}
            </Text>

            <Pressable
              onPress={onClose}
              className="items-center justify-center rounded-full bg-gray-100 p-2 active:opacity-60 dark:bg-gray-800"
            >

              <MaterialIcons
                name="close"
                size={22}
                color={
                  isDark
                    ? "#FFFFFF"
                    : "#000000"
                }
              />

            </Pressable>

          </View>

          <ScrollView
            contentContainerStyle={{
              padding: 20,
              paddingBottom: 40,
            }}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets
            showsVerticalScrollIndicator
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

};


export default ContainerBackground;