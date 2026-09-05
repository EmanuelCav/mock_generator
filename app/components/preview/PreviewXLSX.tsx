import { ScrollView, Text, View } from "react-native";

import { PreviewXLSXPropsType } from "../../types/home.types";

const PreviewXLSX = ({ data }: PreviewXLSXPropsType) => {

  const headers = Object.keys(data[0] ?? {});

  return (
    <ScrollView horizontal className="pb-4">
      <View>

        <Text className="font-bold text-black dark:text-white">
          {headers.join(" | ")}
        </Text>

        {data.map((row: any, i: number) => (
          <Text
            key={i}
            className="text-black dark:text-white"
          >
            {headers.map((header) => row[header]).join(" | ")}
          </Text>
        ))}

      </View>
    </ScrollView>
  );
};

export default PreviewXLSX;