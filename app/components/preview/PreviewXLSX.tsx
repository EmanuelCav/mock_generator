import { ScrollView, Text, View } from "react-native";

import { PreviewXLSXPropsType } from "../../types/home.types";

const CELL_WIDTH = 140;

const PreviewXLSX = ({ data }: PreviewXLSXPropsType) => {

  const headers = Object.keys(
    data[0] ?? {}
  );

  if (!data.length) {
    return null;
  }

  return (
    <View className=" overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-black">
      <ScrollView horizontal showsHorizontalScrollIndicator>

        <View>
          <View className="flex-row bg-emerald-50 dark:bg-emerald-950">
            <View className="w-10 items-center justify-center border-r border-b border-gray-200 dark:border-gray-700">
              <Text className="text-xs text-gray-400">
                #
              </Text>
            </View>

            {headers.map(
              (header, index) => (

                <View
                  key={`${header}-${index}`}
                  style={{
                    width: CELL_WIDTH,
                  }}
                  className="border-r border-b border-gray-200 px-3 py-3 dark:border-gray-700"
                >

                  <Text
                    numberOfLines={1}
                    className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400"
                  >
                    {header}
                  </Text>

                </View>

              )
            )}

          </View>

          {data.map(
            (row: any, rowIndex: number) => (
              <View
                key={rowIndex}
                className="flex-row bg-white dark:bg-black"
              >

                <View
                  className="w-10 items-center justify-center border-r border-b border-gray-200
                  bg-gray-50 py-3 dark:border-gray-700 dark:bg-gray-900"
                >

                  <Text className="text-xs text-gray-400">
                    {rowIndex + 1}
                  </Text>

                </View>

                {headers.map(
                  (header) => (

                    <View
                      key={header}
                      style={{
                        width: CELL_WIDTH,
                      }}
                      className="border-r border-b border-gray-200 px-3 py-3 dark:border-gray-700"
                    >

                      <Text
                        numberOfLines={1}
                        className="text-xs text-gray-700 dark:text-gray-300"
                      >
                        {String(
                          row[header] ?? ""
                        )}
                      </Text>

                    </View>

                  )
                )}

              </View>

            )
          )}

        </View>

      </ScrollView>

    </View>

  );

};


export default PreviewXLSX;