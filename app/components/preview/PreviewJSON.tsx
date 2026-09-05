import { ScrollView, Text } from "react-native";

import { PreviewJSONPropsType } from "../../types/home.types";

const PreviewJSON = ({ data, json_array }: PreviewJSONPropsType) => {

  const content = json_array
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data[0] ?? {}, null, 2);

  return (
    <ScrollView horizontal className="pb-4">
      <Text
        selectable
        className="text-xs text-black dark:text-white"
        style={{ fontFamily: "monospace" }}
      >
        {content}
      </Text>
    </ScrollView>
  );
};

export default PreviewJSON;