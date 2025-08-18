import { Dimensions, View } from 'react-native'
import { useEffect, useState } from 'react';
import { Text, Switch, Icon, useTheme, useThemeMode, Input } from '@rneui/themed'
import DropDownPicker from 'react-native-dropdown-picker';
import { observer } from 'mobx-react-lite';
import i18n from '../../i18n';

import Container from '../../ContainerGeneral';

import { FormatOption, LanguageOption } from '../types/general.types';

import { generalStyles } from '../styles/general.styles'
import { configStyles } from '../styles/config.styles';

import { formatsAvailable, languagesAvailable } from '../utils/data';

import { fileStore } from '../store/file.store';
import { userStore } from '../store/user.store';

const Config = observer(() => {

    const { theme } = useTheme();
    const { setMode } = useThemeMode();

    const [_, forceRender] = useState<number>(0);

    const [localRows, setLocalRows] = useState<string>(fileStore.rows);

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>(userStore.lang)
    const [items, setItems] = useState<LanguageOption[]>(languagesAvailable)

    const [openFormat, setOpenFormat] = useState<boolean>(false)
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format.toLowerCase())
    const [itemsFormat, setItemsFormat] = useState<FormatOption[]>(formatsAvailable)
    const [fileName, setFileName] = useState<string>(fileStore.file_name)

    const toggleSwitch = () => {
        setMode(theme.mode === "dark" ? "light" : "dark")
        userStore.updateMode(theme.mode !== "dark")
    }

    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    }

    const handleRowsBlur = () => {
        const valueToSave = localRows.trim() === '' ? '1000' : localRows.trim();
        fileStore.updateRows(valueToSave);
    }

    const handleFileNameChange = (text: string) => {
        setFileName(text);
    }

    const handleFileNameBlur = () => {
        const valueToSave = fileName.trim() === '' ? 'DATA_MOCKER' : fileName.trim();
        fileStore.updateFileName(valueToSave);
    }

    useEffect(() => {
        setItems([
            { label: i18n.t("english"), value: 'en' },
            { label: i18n.t("spanish"), value: 'es' },
        ]);
    }, [i18n.locale]);

    useEffect(() => {
        setLocalRows(fileStore.rows)
        setFileName(fileStore.file_name)
        setValueFormat(fileStore.format.toLowerCase())
    }, [fileStore.rows, fileStore.format, fileStore.file_name])

    return (
        <Container>
            <View style={generalStyles.generalContainer}>
                <View style={configStyles.containConfig}>

                    <Text style={{
                        color: theme.colors.white,
                        fontSize: Dimensions.get("window").height / 47,
                        fontWeight: 'bold'
                    }}>{i18n.t("platform")}</Text>

                    <View style={configStyles.platform}>

                        <View style={configStyles.modeContainer}>
                            <Icon
                                name={theme.mode === "dark" ? 'moon' : 'sunny'}
                                type='ionicon'
                                color={theme.mode === "dark" ? '#ffffff' : '#FFA500'}
                                size={30}
                            />
                            <Text style={{
                                color: theme.colors.white,
                                fontSize: Dimensions.get("window").height / 52,
                                marginLeft: Dimensions.get("window").width / 36
                            }}>
                                {i18n.t("darkMode")}
                            </Text>
                        </View>

                        <Switch
                            value={theme.mode === "dark"}
                            onValueChange={toggleSwitch}
                            color="#4CAF50"
                            trackColor={{ true: '#81C784', false: '#E0E0E0' }}
                            thumbColor={theme.mode === "dark" ? '#4CAF50' : '#F4F3F4'}
                        />
                    </View>

                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("language")}
                    </Text>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={(callback) => {
                            const newValue = callback(value)
                            setValue(newValue)
                            userStore.updateLang(newValue)
                            i18n.locale = newValue
                            forceRender(prev => prev + 1)
                        }}
                        setItems={setItems}
                    />

                    <Text style={{
                        marginVertical: Dimensions.get("window").height / 41,
                        color: theme.colors.white,
                        fontSize: Dimensions.get("window").height / 47,
                        fontWeight: 'bold'
                    }}>
                        {i18n.t("file")}
                    </Text>

                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("fileName")}
                    </Text>

                    <Input
                        placeholder={i18n.t("fileName")}
                        autoCapitalize="none"
                        value={fileName}
                        onChangeText={handleFileNameChange}
                        onBlur={handleFileNameBlur}
                        maxLength={30}
                        inputStyle={{ color: theme.colors.white }}
                    />

                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("defaultRows")}
                    </Text>

                    <Input
                        placeholder={i18n.t("defaultRows")}
                        keyboardType="numeric"
                        style={{ color: theme.colors.white }}
                        value={localRows}
                        onChangeText={handleRowsChange}
                        onBlur={handleRowsBlur}
                        maxLength={8}
                    />

                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: theme.colors.white
                    }}>
                        {i18n.t("defaultFormat")}
                    </Text>

                    <DropDownPicker
                        open={openFormat}
                        value={valueFormat}
                        items={itemsFormat}
                        setOpen={setOpenFormat}
                        setValue={setValueFormat}
                        setItems={setItemsFormat}
                    />

                </View>
            </View>
        </Container>
    )
})

export default Config