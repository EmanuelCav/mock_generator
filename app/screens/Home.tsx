import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

import Column from '../components/Column';
import ButtonGenerator from '../components/ButtonGenerator';
import Media from '../components/Media';
import Banner from '../components/Banner';
import FormColumn from '../components/form/FormColumn';
import FormEdit from '../components/form/FormEdit';
import Container from '../../ContainerGeneral';

import { IColumn, ICreateColumn } from '../interface/Column';

import { generalStyles } from '../styles/general.styles';
import { homeStyles } from '../styles/home.styles';

import { fileStore } from "../store/file.store";

import { generateData } from '../utils/generator';

export default function DropdownWithIcons() {

    const { theme } = useTheme();

    const [isForm, setIsForm] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<string>("")

    const handleAddColumn = (data: ICreateColumn) => {

        if (data.title.length === 0) {
            setTitleError("Error write a field name. Please complete.")
            return
        }

        fileStore.addColumn({
            blank: 0,
            fieldName: String(data.title),
            topic: String(data.columnData),
            id: fileStore.column.length + 1,
            data: data.data
        })

        setIsForm(false)
    }

    const removeColumn = (data: IColumn) => {
        fileStore.removeColumn(data)
    }

    const openEdit = (data: IColumn) => {
        setIsEdit(true)
        fileStore.getField(data)
    }

    const handleEdit = () => {

    }

    const closeEdit = () => {
        setIsEdit(false)
        fileStore.getField(null)
    }

    const handleGenerate = () => {
        console.log(generateData(fileStore.column))
    }

    return (
        <Container>
            {
                isForm && <FormColumn
                    error={titleError}
                    colors={theme.colors}
                    handleClose={() => setIsForm(false)}
                    handleAddColumn={handleAddColumn}
                />
            }
            {
                isEdit && <FormEdit
                    colors={theme.colors}
                    handleClose={closeEdit}
                />
            }
            <View style={generalStyles.generalContainer}>
                <Banner />
                {
                    fileStore.column.length > 0 ? <FlatList
                        data={fileStore.column}
                        renderItem={({ item }) => <Column
                            colors={theme.colors}
                            removeColumn={removeColumn}
                            openEdit={openEdit}
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
                <ButtonGenerator handleGenerate={handleGenerate} columnsLength={fileStore.column.length} />
            </View>
        </Container>
    );
}
