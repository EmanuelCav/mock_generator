import { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { DateInputPropsType } from '../../../types/home.types';

const DateInput = ({ value, setValue, label, labelSelected, topic }: DateInputPropsType) => {

    const [show, setShow] = useState<boolean>(false);

    const onChange = (_event: any, selectedDate?: Date) => {
        setShow(Platform.OS === 'ios');

        if (selectedDate) {
            setValue(selectedDate.toISOString());
        }
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const selectedValue =
        value.split("T").length > 1
            ? value.split("T")[0]
            : `${value}-01-01`;

    const year =
        value.split("T").length > 1
            ? value.split("T")[0].split("-")[0]
            : value;

    return (
        <View className="mb-6">

            <Text className="mt-4 text-black dark:text-white">
                {labelSelected}: {selectedValue}
            </Text>

            <TouchableOpacity
                className="mt-3 items-center rounded-lg bg-[#50C878] px-4 py-3"
                onPress={showDatepicker}
            >
                <Text className="font-bold text-white">
                    {label}
                </Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={new Date(`${year}-01-01`)}
                    mode="date"
                    display="default"
                    onValueChange={onChange}
                    maximumDate={
                        topic === "Birthdate"
                            ? new Date(new Date().getFullYear() - 1, 11, 31)
                            : new Date(2100, 11, 31)
                    }
                    minimumDate={
                        topic === "Birthdate"
                            ? new Date(1920, 1, 1)
                            : new Date(1900, 11, 31)
                    }
                />
            )}

        </View>
    );
};

export default DateInput;