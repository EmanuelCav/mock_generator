import { ScrollView, Text, View } from "react-native";

import { PreviewCSVPropsType } from "../../types/home.types";

const PreviewCSV = ({ data, header_csv }: PreviewCSVPropsType) => {

  const headers = Object.keys(data[0] ?? {});

  return (
    <View className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-black">

      <ScrollView horizontal>

        <View className="min-w-full p-4">

          {header_csv && (

            <Text className=" mb-2 font-bold text-emerald-600 dark:text-emerald-400"
              style={{
                fontFamily: "monospace",
              }}
            >
              {headers.join(",")}
            </Text>

          )}

          {data.map((row: any, i: number) => (

            <Text
              key={i}
              className="mb-1 text-sm text-gray-700 dark:text-gray-300"
              style={{
                fontFamily: "monospace",
              }}
            >
              {headers
                .map((header) => row[header])
                .join(",")}
            </Text>
          ))}
        </View>
      </ScrollView>

    </View>

  );

};

export default PreviewCSV;