import { Button } from "@rneui/themed";
import { View } from "react-native";
import i18n from "../../i18n";

import { ButtonGeneratorPropsType } from "../types/home.types";

import { homeStyles } from "../styles/home.styles";

const ButtonGenerator = ({ columnsLength, handleGenerate, loading, handleRefreshData, isRefreshData }: ButtonGeneratorPropsType) => {
  return (
    <View style={homeStyles.buttonGeneratorContainer}>
      <Button
        icon={{
          name: 'rotate-cw',
          type: 'feather',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#50C878' }}
        onPress={handleRefreshData}
      />
      <Button
        disabled={columnsLength === 0 || loading || isRefreshData}
        loading={loading || isRefreshData}
        title={i18n.t("generate")}
        icon={{
          name: 'save',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#50C878', width: '100%' }}
        disabledStyle={{ backgroundColor: loading ? '#50C878' : "#dddddd" }}
        onPress={handleGenerate}
      />
    </View>
  );
};

export default ButtonGenerator;
