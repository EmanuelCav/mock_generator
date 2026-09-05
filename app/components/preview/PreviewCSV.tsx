import { ScrollView, Text, View } from "react-native";

import { PreviewCSVPropsType } from "../../types/home.types";

const PreviewCSV = ({ data, header_csv }: PreviewCSVPropsType) => {

  const headers = Object.keys(data[0] ?? {});

  return (
    <ScrollView horizontal className="pb-4">

      <View>

        {header_csv && (
          <Text className="font-bold text-black dark:text-white">
            {headers.join(",")}
          </Text>
        )}

        {data.map((row: any, i: number) => (
          <Text
            key={i}
            className="text-black dark:text-white"
            style={{ fontFamily: "monospace" }}
          >
            {headers.map((header) => row[header]).join(",")}
          </Text>
        ))}

      </View>

    </ScrollView>
  );
};

export default PreviewCSV;