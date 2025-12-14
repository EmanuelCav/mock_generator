import { Dimensions, ScrollView, Text } from 'react-native';

import { PreviewXMLPropsType } from '../../types/home.types';

const PreviewXML = ({ data, colors, record_element_xml, root_element_xml }: PreviewXMLPropsType) => {

  const xml = data
    .map(
      (row: any) =>
        `<${record_element_xml}>\n${Object.entries(row)
          .map(([_, v]) => `  <${root_element_xml}>${v}</${root_element_xml}>`)
          .join('\n')}\n</${record_element_xml}>`
    )
    .join('\n')

  return (
    <ScrollView horizontal style={{ paddingBottom: Dimensions.get("window").height / 66 }}>
      <Text style={{ fontFamily: 'monospace', fontSize: 12, color: colors.white }}>
        {xml}
      </Text>
    </ScrollView>
  );
}

export default PreviewXML