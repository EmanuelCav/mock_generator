import { ScrollView, Text, View } from "react-native";

import { PreviewXMLPropsType } from "../../types/home.types";

const PreviewXML = ({ data, record_element_xml, root_element_xml }: PreviewXMLPropsType) => {

  return (
    <View className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-black">

      <ScrollView horizontal>

        <View className="min-w-full p-4">

          {data.map((row: any, rowIndex: number) => (

            <View key={rowIndex} className="mb-4">

              <Text
                selectable
                className="text-xs leading-5 text-blue-600 dark:text-blue-400"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {`<${record_element_xml}>`}
              </Text>

              {Object.entries(row).map(
                ([key, value]) => (

                  <Text
                    key={key}
                    selectable
                    className="ml-4 text-xs leading-5"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >

                    <Text className="text-blue-600 dark:text-blue-400">
                      {`<${root_element_xml}>`}
                    </Text>

                    <Text className="text-emerald-600 dark:text-emerald-400">
                      {String(value)}
                    </Text>

                    <Text className="text-blue-600 dark:text-blue-400">
                      {`</${root_element_xml}>`}
                    </Text>

                  </Text>

                )
              )}

              <Text
                selectable
                className="text-xs leading-5 text-blue-600 dark:text-blue-400"
                style={{
                  fontFamily: "monospace",
                }}
              >
                {`</${record_element_xml}>`}
              </Text>

            </View>

          ))}

        </View>

      </ScrollView>

    </View>

  );

};


export default PreviewXML;