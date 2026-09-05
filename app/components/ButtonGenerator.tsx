import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import { ButtonGeneratorPropsType } from "../types/home.types";

const ButtonGenerator = ({ columnsLength, handleGenerate, loading, handleRefreshData, isRefreshData, t }: ButtonGeneratorPropsType) => {

  const isDisabled = columnsLength === 0 || loading || isRefreshData;

  return (
    <View className="flex-row items-center gap-3 px-4 py-3">

      <Pressable
        onPress={handleRefreshData}
        disabled={loading || isRefreshData}
        className={`items-center justify-center rounded-xl bg-emerald-500 p-4 ${(loading || isRefreshData) ? "opacity-50" : "active:opacity-80"}`}
      >
        {isRefreshData ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Feather name="rotate-cw" size={22} color="#FFFFFF" />
        )}
      </Pressable>

      <Pressable
        onPress={handleGenerate}
        disabled={isDisabled}
        className={`flex-1 flex-row items-center justify-center gap-2 rounded-xl px-5 py-4 ${isDisabled ? "bg-gray-300 dark:bg-gray-700" : "bg-emerald-500 active:opacity-80"}`}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <FontAwesome name="save" size={18} color="#FFFFFF" />
            <Text className={`text-base font-bold ${isDisabled ? "text-gray-500" : "text-white"}`}>
              {t("generate")}
            </Text>
          </>
        )}
      </Pressable>

    </View>
  );
};

export default ButtonGenerator;