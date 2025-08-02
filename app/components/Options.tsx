import { useState } from "react"
import { Dimensions, View } from "react-native"
import { Button, Input, Switch, Text, useTheme } from "@rneui/themed"
import DropDownPicker from "react-native-dropdown-picker"
import i18n from "../../i18n"
import { observer } from "mobx-react-lite"

import ContainerBackground from "./ContainerBackground"
import Close from "./Close"

import { OptionsPropsType } from "../types/home.types"
import { FormatOption } from "../types/general.types"

import { configStyles } from "../styles/config.styles"

import { fileStore } from "../store/file.store"

import { formatsAvailable } from "../utils/data"

const Options = observer(({ handleClose, handleOption }: OptionsPropsType) => {

    const { theme } = useTheme()

    const [headers, setHeaders] = useState<boolean>(fileStore.areHeaders)
    const [localRows, setLocalRows] = useState<string>(fileStore.rows);

    const [openFormat, setOpenFormat] = useState<boolean>(false)
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format)
    const [itemsFormat, setItemsFormat] = useState<FormatOption[]>(formatsAvailable)

    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    }

    const toggleSwitchHeaders = () => {
        setHeaders(!headers)
        fileStore.updateHeaders(!fileStore.areHeaders)
    }

    return (
        <ContainerBackground colors={theme.colors}>
            <Close handleClose={handleClose} />
            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: theme.colors.white
            }}>
                {i18n.t("rows")}
            </Text>

            <Input
                keyboardType="numeric"
                style={{ color: theme.colors.white }}
                value={localRows}
                onChangeText={handleRowsChange}
                maxLength={6}
            />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: theme.colors.white
            }}>
                {i18n.t("formatfile")}
            </Text>

            <DropDownPicker
                open={openFormat}
                value={valueFormat}
                items={itemsFormat}
                setOpen={setOpenFormat}
                setValue={setValueFormat}
                setItems={setItemsFormat}
            />

            <View style={configStyles.platform}>

                <Text style={{
                    color: theme.colors.white,
                    fontSize: Dimensions.get("window").height / 52,
                    marginLeft: Dimensions.get("window").width / 36
                }}>
                    {i18n.t("defaultHeader")}
                </Text>

                <Switch
                    value={headers}
                    onValueChange={toggleSwitchHeaders}
                    color="#4CAF50"
                    trackColor={{ true: '#81C784', false: '#E0E0E0' }}
                    thumbColor={headers ? '#4CAF50' : '#F4F3F4'}
                />
            </View>

            <Button
                title={i18n.t("accept")}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                onPress={() => {
                    handleOption({
                        areHeaders: headers,
                        format: valueFormat,
                        rows: localRows === "" ? "1000" : localRows
                    })
                }}
            />
        </ContainerBackground>
    )
})

export default Options