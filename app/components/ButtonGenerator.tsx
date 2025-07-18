import { Button } from "@rneui/themed"
import { View } from "react-native"

import { homeStyles } from "../styles/home.styles"

import { ButtonGeneratorPropsType } from "../types/home.types"

const ButtonGenerator = ({ columnsLength, handleGenerate }: ButtonGeneratorPropsType) => {
  return (
    <View style={homeStyles.ButtonGeneratorContainer}>
      <Button
        disabled={columnsLength === 0}
        title="GENERATE DATA"
        icon={{
          name: 'save',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#50C878' }}
        onPress={handleGenerate}
      />
    </View>
  )
}

export default ButtonGenerator