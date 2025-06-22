import { Button } from "@rneui/themed"

import { AddColumnPropsType } from "../../types/home.types"

const AddColumn = ({ openForm }: AddColumnPropsType) => {
  return (
    <Button
      title="Agregar Columna"
      icon={{
        name: 'add',
        color: 'white',
      }}
      buttonStyle={{ backgroundColor: '#4caf50' }}
      onPress={openForm}
    />

  )
}

export default AddColumn