import { ScrollView, Text, View } from "react-native";

import { PreviewJSONPropsType } from "../../types/home.types";

const PreviewJSON = ({ data, json_array }: PreviewJSONPropsType) => {

  const content = json_array
    ? JSON.stringify(data, null, 2)
    : data
      .map((item) => JSON.stringify(item, null, 2))
      .join(",\n");

  const lines = content.split("\n");

  return (
    <View className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-black">
      <ScrollView horizontal>
        <View className="min-w-full p-4">
          {lines.map((line, index) => (
            <View key={index} className="flex-row">
              <Text
                className="mr-4 w-8 text-right text-xs text-gray-400 dark:text-gray-600"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {index + 1}
              </Text>
              <Text
                selectable
                className="text-xs leading-5 text-gray-800 dark:text-gray-200"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {line}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>

    </View>
  );
};

export default PreviewJSON;