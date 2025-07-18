import { useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Button, Input, Text } from "@rneui/themed"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import ContainerBackground from "../ContainerBackground"
import ColumnSelect from './components/ColumnSelect';
import Close from '../Close';

import { FormColumnPropsType } from '../../types/home.types';

import { column, topics } from '../../utils/topics';

const FormColumn = ({ handleClose, handleAddColumn, colors, error }: FormColumnPropsType) => {

    const [open, setOpen] = useState<boolean>(false)
    const [columnData, setColumnData] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [value, setValue] = useState<string>("all topics")
    const [items, setItems] = useState(
        topics.map(item => ({
            ...item,
            icon: () => (
                <MaterialCommunityIcons
                    name={item.iconName as any}
                    size={18}
                    color="#666" />
            ),
        }))
    )

    return (
        <ContainerBackground colors={colors}>

            <Close handleClose={handleClose} />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                Write a field name
            </Text>

            {
                error &&
                <Text style={{
                    marginBottom: Dimensions.get("window").height / 143,
                    fontWeight: 'bold',
                    color: 'red'
                }}>
                    {error}
                </Text>
            }

            <Input
                placeholder="Field Name"
                autoCapitalize="none"
                value={title}
                onChangeText={setTitle}
                maxLength={30}
                inputStyle={{ color: colors.white }}
            />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                Select a topic to filter (optional)
            </Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select a topic to filter"
            />

            <Text style={{
                marginVertical: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                Select a type {value === "all topics" ? "(scroll down to see more)" : ""}
            </Text>

            <ScrollView style={{ marginVertical: Dimensions.get("window").height / 246.66 }}>
                {
                    column
                        .filter(col => col.topic.find(t => t === value.charAt(0).toUpperCase() + value.slice(1, value.length)))
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((element, index) => {
                            return <ColumnSelect
                                colors={colors}
                                columnData={columnData}
                                setColumnData={setColumnData}
                                element={element}
                                key={index} />
                        })
                }
            </ScrollView>
            <Button
                disabled={columnData.length === 0 || title.length === 0}
                title="ADD"
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                onPress={() => handleAddColumn({
                    title,
                    columnData,
                    data: column.find((col) => col.name === columnData)?.data!
                })}
            />
        </ContainerBackground>
    )
}

export default FormColumn