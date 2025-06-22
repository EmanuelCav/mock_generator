import { Button } from "@rneui/themed"
import { View } from "react-native"

import { homeStyles } from "../styles/home.styles"

const ButtonGenerator = () => {
  return (
    <View style={homeStyles.ButtonGeneratorContainer}>
      <Button
        title="Generate"
        icon={{
          name: 'save',
          color: 'white',
        }}
        buttonStyle={{ backgroundColor: '#4caf50' }}
        onPress={() => console.log('Botón presionado')}
      />
    </View>
  )
}

export default ButtonGenerator