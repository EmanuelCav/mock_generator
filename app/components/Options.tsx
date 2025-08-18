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

    const [headers, setHeaders] = useState<boolean>(fileStore.header_csv)
    const [arrayJson, setArrayJson] = useState<boolean>(fileStore.json_array)
    const [rootElement, setRootElement] = useState<string>(fileStore.root_element_xml)
    const [recordElement, setRecordElement] = useState<string>(fileStore.record_element_xml)
    const [tableName, setTableName] = useState<string>(fileStore.table_name_sql)

    const [localRows, setLocalRows] = useState<string>(fileStore.rows);
    const [error, setError] = useState<string>("")

    const [openFormat, setOpenFormat] = useState<boolean>(false)
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format)
    const [itemsFormat, setItemsFormat] = useState<FormatOption[]>(formatsAvailable)

    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    }

    const handleRootElement = (text: string) => {
        setRootElement(text);
    }

    const handleRecordElement = (text: string) => {
        setRecordElement(text);
    }

    const handleTableName = (text: string) => {
        setTableName(text);
    }

    const toggleSwitchHeaders = () => {
        setHeaders(!headers)
        fileStore.updateHeaderCsv(!headers)
    }

    const toggleSwitchArray = () => {
        setArrayJson(!arrayJson)
        fileStore.updateArrayJson(!arrayJson)
    }

    return (
        <ContainerBackground colors={theme.colors} isField={false}>

            <Close handleClose={() => {
                setError("")
                handleClose()
            }} />

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
                maxLength={8}
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

            {
                valueFormat === "csv" && <View style={configStyles.platform}>
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
            }

            {
                valueFormat === "json" && <View style={configStyles.platform}>
                    <Text style={{
                        color: theme.colors.white,
                        fontSize: Dimensions.get("window").height / 52,
                        marginLeft: Dimensions.get("window").width / 36
                    }}>
                        {i18n.t("includeArray")}
                    </Text>
                    <Switch
                        value={arrayJson}
                        onValueChange={toggleSwitchArray}
                        color="#4CAF50"
                        trackColor={{ true: '#81C784', false: '#E0E0E0' }}
                        thumbColor={arrayJson ? '#4CAF50' : '#F4F3F4'}
                    />
                </View>
            }

            {
                error && <Text style={{ color: "#f00", marginTop: Dimensions.get("window").height / 74 }}>
                    {error}
                </Text>
            }

            {
                valueFormat === "xml" && <View style={{ marginTop: Dimensions.get("window").height / 74 }}>
                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("datasetLabel")}
                    </Text>

                    <Input
                        placeholder={i18n.t("datasetLabel")}
                        autoCapitalize="none"
                        value={rootElement}
                        onChangeText={handleRootElement}
                        maxLength={30}
                        inputStyle={{ color: theme.colors.white }}
                    />
                </View>
            }

            {
                valueFormat === "xml" && <View style={{ marginTop: Dimensions.get("window").height / 74 }}>
                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("recordLabel")}
                    </Text>

                    <Input
                        placeholder={i18n.t("recordLabel")}
                        autoCapitalize="none"
                        value={recordElement}
                        onChangeText={handleRecordElement}
                        maxLength={30}
                        inputStyle={{ color: theme.colors.white }}
                    />
                </View>
            }

            {
                valueFormat === "sql" && <View style={{ marginTop: Dimensions.get("window").height / 74 }}>
                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("tableNameSql")}
                    </Text>

                    <Input
                        placeholder={i18n.t("tableNameSql")}
                        autoCapitalize="none"
                        value={tableName}
                        onChangeText={handleTableName}
                        maxLength={30}
                        inputStyle={{ color: theme.colors.white }}
                    />
                </View>
            }

            <View style={{ marginTop: Dimensions.get("window").height / 74 }}>
                <Button
                    title={i18n.t("accept")}
                    buttonStyle={{
                        backgroundColor: "#50C878",
                    }}
                    onPress={() => {

                        if (!recordElement) {
                            setError(i18n.t("errorRecord"))
                            return
                        }

                        if (!rootElement) {
                            setError(i18n.t("errorRoot"))
                            return
                        }

                        if (!tableName) {
                            setError(i18n.t("errorTableName"))
                            return
                        }

                        handleOption({
                            format: valueFormat,
                            rows: localRows === "" ? "1000" : localRows,
                            header_csv: headers,
                            json_array: arrayJson,
                            record_element_xml: recordElement,
                            root_element_xml: rootElement,
                            table_name_sql: tableName
                        })

                        setError("")
                    }}
                />

            </View>

        </ContainerBackground>
    )
})

export default Options