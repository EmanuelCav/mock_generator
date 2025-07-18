import { useState } from 'react';
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from '@rneui/themed';

import ContainerBackground from "../ContainerBackground"
import Close from "../Close"

import { FormEditPropsType } from "../../types/home.types"
import { FormatOption, FormatTypes } from '../../types/general.types';

import { formatsAvailable } from '../../utils/data';

const FormEdit = ({ colors, handleClose }: FormEditPropsType) => {

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<FormatTypes>("csv")
    const [items, setItems] = useState<FormatOption[]>(formatsAvailable)

    return (
        <ContainerBackground colors={colors}>
            <Close handleClose={handleClose} />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                Selecciona un formato para el archivo
            </Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecciona un formato para el archivo"
            />

        </ContainerBackground>
    )
}

export default FormEdit