import { Dimensions, View } from 'react-native'
import { useEffect, useState } from 'react';
import { Text, Switch, Icon, useTheme, useThemeMode, Input } from '@rneui/themed'
import DropDownPicker from 'react-native-dropdown-picker';

import Container from '../../ContainerGeneral';

import { FormatOption, LanguageOption } from '../types/general.types';

import { generalStyles } from '../styles/general.styles'
import { configStyles } from '../styles/config.styles';

import { formatsAvailable, languagesAvailable } from '../utils/data';

import { userStore } from '../store/user.store';
import { fileStore } from '../store/file.store';

const Config = () => {

    const { theme } = useTheme();
    const { setMode } = useThemeMode();

    const [darkMode, setDarkMode] = useState<boolean>(userStore.isDarkMode);
    const [headers, setHeaders] = useState(fileStore.areHeaders)

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("Spanish")
    const [items, setItems] = useState<LanguageOption[]>(languagesAvailable)

    const [openFormat, setOpenFormat] = useState<boolean>(false)
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format)
    const [itemsFormat, setItemsFormat] = useState<FormatOption[]>(formatsAvailable)

    const toggleSwitchHeaders = () => {
        setHeaders(!headers)
        fileStore.updateHeaders(!fileStore.areHeaders)
    }

    const toggleSwitch = () => {
        setDarkMode(!darkMode);
        userStore.handleThemeChanged(true)

        if (darkMode) {
            setMode("light")
            userStore.handleTheme(true)
        } else {
            setMode("dark")
            userStore.handleTheme(false)
        }

    }

    useEffect(() => {
        fileStore.updateFormat(valueFormat)
    }, [valueFormat])

    return (
        <Container>
            <View style={generalStyles.generalContainer}>

                <Text style={{
                    color: theme.colors.white,
                    fontSize: Dimensions.get("window").height / 47
                }}>PLATFORM</Text>

                <View style={configStyles.platform}>

                    <View style={configStyles.modeContainer}>
                        <Icon
                            name={darkMode ? 'moon' : 'sunny'}
                            type='ionicon'
                            color={darkMode ? '#ffffff' : '#FFA500'}
                            size={30}
                        />
                        <Text style={{
                            color: theme.colors.white,
                            fontSize: Dimensions.get("window").height / 52,
                            marginLeft: Dimensions.get("window").width / 36
                        }}>
                            Theme
                        </Text>
                    </View>

                    <Switch
                        value={darkMode}
                        onValueChange={toggleSwitch}
                        color="#4CAF50"
                        trackColor={{ true: '#81C784', false: '#E0E0E0' }}
                        thumbColor={darkMode ? '#4CAF50' : '#F4F3F4'}
                    />
                </View>


                <Text style={{
                    marginBottom: Dimensions.get("window").height / 143,
                    fontWeight: 'bold',
                    color: theme.colors.white
                }}>
                    Language
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
                    marginVertical: Dimensions.get("window").height / 41,
                    color: theme.colors.white,
                    fontSize: Dimensions.get("window").height / 47
                }}>FILE</Text>

                <Text style={{
                    marginBottom: Dimensions.get("window").height / 143,
                    fontWeight: 'bold',
                    color: theme.colors.white
                }}>
                    Default rows amount
                </Text>

                <Input
                    placeholder="Solo números"
                    keyboardType="numeric"
                    style={{ color: theme.colors.white }}
                    value={fileStore.rows}
                    onChangeText={fileStore.updateRows.bind(userStore)}
                    maxLength={6}
                />

                <Text style={{
                    marginBottom: Dimensions.get("window").height / 143,
                    fontWeight: 'bold',
                    color: theme.colors.white
                }}>
                    Default format
                </Text>

                <DropDownPicker
                    open={openFormat}
                    value={valueFormat}
                    items={itemsFormat}
                    setOpen={setOpenFormat}
                    setValue={setValueFormat}
                    setItems={setItemsFormat}
                    placeholder="Select a format file"
                />

                <View style={configStyles.platform}>

                    <Text style={{
                        color: theme.colors.white,
                        fontSize: Dimensions.get("window").height / 52,
                        marginLeft: Dimensions.get("window").width / 36
                    }}>
                        Default include header value
                    </Text>

                    <Switch
                        value={headers}
                        onValueChange={toggleSwitchHeaders}
                        color="#4CAF50"
                        trackColor={{ true: '#81C784', false: '#E0E0E0' }}
                        thumbColor={headers ? '#4CAF50' : '#F4F3F4'}
                    />
                </View>

            </View>
        </Container>
    )
}

export default Config