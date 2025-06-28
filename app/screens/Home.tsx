import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

import Column from '../components/Column';
import ButtonGenerator from '../components/ButtonGenerator';
import Media from '../components/Media';
import Banner from '../components/Banner';
import FormColumn from '../components/form/FormColumn';

import { IColumn, ICreateColumn } from '../interface/Column';

import { generalStyles } from '../styles/general.styles';
import { homeStyles } from '../styles/home.styles';

export default function DropdownWithIcons() {

    const { theme } = useTheme();

    const [isForm, setIsForm] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<string>("")

    const [columns, setColumns] = useState<IColumn[]>([{
        id: 1,
        fieldName: "Id",
        topic: "uuid",
        blank: 0
    }, {
        id: 2,
        fieldName: "Firstname",
        topic: "firstname",
        blank: 0
    }, {
        id: 3,
        fieldName: "Lastname",
        topic: "lastName",
        blank: 0
    }])

    const handleAddColumn = (data: ICreateColumn) => {

        if (data.title.length === 0) {
            setTitleError("Error write a field name. Please complete.")
            return
        }

        setColumns([...columns, {
            blank: 0,
            fieldName: String(data.title),
            topic: String(data.columnData),
            id: columns.length + 1
        }])

        setIsForm(false)
    }

    const removeColumn = (data: string) => {
        const newColumns = columns.filter(c => c.fieldName !== data)
        setColumns(newColumns)
    }

    return (
        <View style={{ flex: 1 }}>
            {
                isForm && <FormColumn
                    error={titleError}
                    colors={theme.colors}
                    handleClose={() => setIsForm(false)}
                    handleAddColumn={handleAddColumn}
                />
            }
            <View style={generalStyles.generalContainer}>
                <Banner />
                {
                    columns.length > 0 ? <FlatList
                        data={columns}
                        renderItem={({ item }) => <Column
                            colors={theme.colors}
                            removeColumn={removeColumn}
                            column={item}
                        />}
                        keyExtractor={(column) => String(column.id)}
                    /> : <View style={homeStyles.containerNotFields}>
                        <Text style={homeStyles.titleNotFields}>
                            There are not fields! Start to add
                        </Text>
                    </View>
                }
                <Media openForm={() => setIsForm(true)} />
                <ButtonGenerator columnsLength={columns.length} />
            </View>
        </View>
    );
}
