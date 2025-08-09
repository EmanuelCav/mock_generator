import { useState } from 'react';
import { Dimensions, Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Text } from '@rneui/themed';

import { DateInputPropsType } from '../../../types/home.types';

const DateInput = ({ colors, value, setValue, label, labelSelected, topic }: DateInputPropsType) => {

    const [show, setShow] = useState<boolean>(false);

    const onChange = (event: any, selectedDate?: Date) => {
        setShow(Platform.OS === 'ios');
        if (selectedDate) {
            setValue(selectedDate.toISOString());
        }
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <>
            <Text style={{ marginTop: Dimensions.get("window").height / 106, color: colors.white }}>
                {labelSelected}: {value.split("T").length > 1 ? `${value.split("T")[0]}` : `${value}-01-01` }
            </Text>

            <View style={{ marginBottom: Dimensions.get("window").height / 47 }}>
                <Button
                    title={label}
                    buttonStyle={{
                        backgroundColor: "#50C878"
                    }}
                    onPress={showDatepicker}
                />
            </View>

            {show && (
                <DateTimePicker
                    value={new Date(`${value.split("T").length > 1 ? `${value.split("T")[0].split("-")[0]}` : `${value}`}-01-01`)}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    maximumDate={topic === "Birthdate" ? new Date(new Date().getFullYear() - 1, 11, 31) : new Date(2100, 11, 31)}
                    minimumDate={topic === "Birthdate" ? new Date(1920, 1, 1) : new Date(1900, 11, 31)}
                />
            )}
        </>
    )
}

export default DateInput;
