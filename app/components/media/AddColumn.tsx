import { Dimensions } from "react-native";
import { Button } from "@rneui/themed"
import i18n from '../../../i18n';

import { AddColumnPropsType } from "../../types/home.types"

const AddColumn = ({ openForm }: AddColumnPropsType) => {
  return (
    <Button
      title={i18n.t("addField")}
      icon={{
        name: 'add',
        color: 'white',
      }}
      buttonStyle={{ backgroundColor: '#50C878' }}
      titleStyle={{ fontSize: Dimensions.get("window").height / 63 }}
      onPress={openForm}
    />
  )
}

export default AddColumn