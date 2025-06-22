import { useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button, Icon, Input } from "@rneui/themed"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import ContainerBackground from "../ContainerBackground"
import ColumnSelect from './components/ColumnSelect';

import { ISelectColumn } from '../../interface/Column';

import { FormColumnPropsType } from '../../types/home.types';

import { generalStyles } from "../../styles/general.styles"

import { column, topics } from '../../utils/topics';

const FormColumn = ({ handleClose, handleAddColumn }: FormColumnPropsType) => {

    const [open, setOpen] = useState<boolean>(false)
    const [columnData, setColumnData] = useState<string>("")
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>("All topics")
    const [items, setItems] = useState(
        topics.map(item => ({
            ...item,
            icon: () => (
                <MaterialCommunityIcons name={item.iconName as any} size={18} color="#666" />
            ),
        }))
    )

    return (
        <ContainerBackground>
            <Icon
                name="settings"
                color="#ff0000"
                size={20}
                onPress={handleClose}
                style={generalStyles.buttonClose}
            />
            <View style={{ marginTop: Dimensions.get("window").height / 74 }}>
                <Input
                    placeholder="Correo electrónico"
                    autoCapitalize="none"
                    value={title}
                    onChangeText={setTitle}
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Selecciona un tema"
                />
                <ScrollView>
                    {
                        column.map((element, index) => {
                            return <ColumnSelect setColumnData={setColumnData} element={element} key={index} />
                        })
                    }
                </ScrollView>
                <Button onPress={() => handleAddColumn(columnData)}>
                    ADD
                </Button>
            </View>
        </ContainerBackground>
    )
}

export default FormColumn