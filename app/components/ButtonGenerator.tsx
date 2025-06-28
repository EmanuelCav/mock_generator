import { Button } from "@rneui/themed"
import { View } from "react-native"

import { homeStyles } from "../styles/home.styles"

const ButtonGenerator = ({ columnsLength }: { columnsLength: number }) => {
  return (
    <View style={homeStyles.ButtonGeneratorContainer}>
      <Button
        disabled={columnsLength === 0}
        title="GENERATE"
        icon={{
          name: 'save',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#50C878' }}
        onPress={() => console.log('Botón presionado')}
      />
    </View>
  )
}

export default ButtonGenerator