import { Button } from "@rneui/themed"

import { AddColumnPropsType } from "../../types/home.types"

const AddColumn = ({ openForm }: AddColumnPropsType) => {
  return (
    <Button
      title="ADD FIELD"
      icon={{
        name: 'add',
        color: 'white',
      }}
      buttonStyle={{ backgroundColor: '#50C878' }}
      onPress={openForm}
    />

  )
}

export default AddColumn