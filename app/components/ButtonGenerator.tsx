import { Button } from "@rneui/themed";
import { View } from "react-native";
import i18n from "../../i18n";

import { ButtonGeneratorPropsType } from "../types/home.types";

import { homeStyles } from "../styles/home.styles";

const ButtonGenerator = ({ columnsLength, handleGenerate, loading }: ButtonGeneratorPropsType) => {
  return (
    <View style={homeStyles.ButtonGeneratorContainer}>
      <Button
        disabled={columnsLength === 0 || loading}
        loading={loading}
        title={i18n.t("generate")}
        icon={{
          name: 'save',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#50C878' }}
        disabledStyle={{ backgroundColor: loading ? '#50C878' : "#dddddd" }}
        onPress={handleGenerate}
      />
    </View>
  );
};

export default ButtonGenerator;
