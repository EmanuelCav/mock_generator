import { Dimensions, ScrollView, Text } from 'react-native';

import { PreviewJSONPropsType } from '../../types/home.types';

const PreviewJSON = ({ data, colors, json_array }: PreviewJSONPropsType) => {

  const content = json_array
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data[0] ?? {}, null, 2);

  return (
    <ScrollView horizontal style={{ paddingBottom: Dimensions.get("window").height / 66 }}>
      <Text
        selectable
        style={{
          color: colors.white,
          fontFamily: 'monospace',
          fontSize: 12,
        }}
      >
        {content}
      </Text>
    </ScrollView>
  )
}

export default PreviewJSON;