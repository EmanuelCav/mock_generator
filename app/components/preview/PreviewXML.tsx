import { ScrollView, Text } from "react-native";

import { PreviewXMLPropsType } from "../../types/home.types";

const PreviewXML = ({ data, record_element_xml, root_element_xml }: PreviewXMLPropsType) => {

  const xml = data
    .map(
      (row: any) =>
        `<${record_element_xml}>\n${Object.entries(row)
          .map(([_, value]) => `  <${root_element_xml}>${value}</${root_element_xml}>`)
          .join("\n")}\n</${record_element_xml}>`
    )
    .join("\n");

  return (
    <ScrollView horizontal className="pb-4">
      <Text
        className="text-xs text-black dark:text-white"
        style={{ fontFamily: "monospace" }}
      >
        {xml}
      </Text>
    </ScrollView>
  );
};

export default PreviewXML;