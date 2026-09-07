import { Modal, Pressable, View, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ContainerBackgroundPropsType } from "../types/general.types";

import { useThemeMode } from "../hooks/useThemeContext";

const ContainerBackground = ({ children, onClose, title }: ContainerBackgroundPropsType) => {

  const { themeMode } = useThemeMode();

  const isDark = themeMode === "dark";

  return (
    <Modal
      visible
      transparent
      animationType="fade"
      statusBarTranslucent
    >

      <View className="flex-1 items-center justify-center bg-black/60 px-4">

        <View className="max-h-[85%] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900">

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
                color={isDark ? "#FFFFFF" : "#000000"}
              />

            </Pressable>

          </View>

          <ScrollView
            className="flex-grow"
            contentContainerStyle={{
              padding: 16,
            }}
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