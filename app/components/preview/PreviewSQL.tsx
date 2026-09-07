import { ScrollView, Text, View } from "react-native";

import { PreviewSQLPropsType } from "../../types/home.types";

const PreviewSQL = ({ data, table_name_sql }: PreviewSQLPropsType) => {

  const sqlRows = data.map((row: any) => {

    const keys = Object.keys(row);
    const values = Object.values(row);

    return {
      keys,
      values,
    };

  });

  return (
    <View className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-black"
    >
      <ScrollView horizontal>

        <View className="min-w-full p-4">

          {sqlRows.map((row, index) => (

            <View
              key={index}
              className="mb-4 flex-row"
            >

              <Text
                className="mr-4 w-6 text-right text-xs text-gray-400 dark:text-gray-600"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {index + 1}
              </Text>


              <Text
                selectable
                className="text-xs leading-5"
                style={{
                  fontFamily: "monospace",
                }}
              >

                <Text className="font-bold text-purple-600 dark:text-purple-400">
                  INSERT INTO
                </Text>

                <Text className="text-blue-600 dark:text-blue-400">
                  {" "}{table_name_sql}
                </Text>

                <Text className="text-gray-700 dark:text-gray-300">
                  {" ("}{row.keys.join(", ")}{") "}
                </Text>

                <Text className="font-bold text-purple-600 dark:text-purple-400">
                  VALUES
                </Text>

                <Text className="text-emerald-600 dark:text-emerald-400">
                  {" ("}
                  {row.values
                    .map(
                      value => `'${value}'`
                    )
                    .join(", ")}
                  {")"}
                </Text>

                <Text className="text-gray-700 dark:text-gray-300">
                  ;
                </Text>

              </Text>

            </View>

          ))}
        </View>
      </ScrollView>
    </View>
  );

};


export default PreviewSQL;