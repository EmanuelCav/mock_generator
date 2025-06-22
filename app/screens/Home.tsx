import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Column from '../components/Column';
import ButtonGenerator from '../components/ButtonGenerator';
import Media from '../components/Media';
import Banner from '../components/Banner';
import FormColumn from '../components/form/FormColumn';

import { IColumn } from '../interface/Column';

import { generalStyles } from '../styles/general.styles';

export default function DropdownWithIcons() {

    const [isForm, setIsForm] = useState<boolean>(false)

    const [columns, setColumns] = useState<IColumn[]>([{
        fieldName: "Id",
        topic: "uuid",
        blank: 0
    }, {
        fieldName: "Firstname",
        topic: "firstname",
        blank: 0
    }, {
        fieldName: "Lastname",
        topic: "lastName",
        blank: 0
    }])

    const handleAddColumn = (data: string) => {
        console.log(data);
        setColumns([...columns,])
    }

    return (
        <View style={{ flex: 1 }}>
            {
                isForm && <FormColumn
                    handleClose={() => setIsForm(false)}
                    handleAddColumn={handleAddColumn} />
            }
            <View style={generalStyles.generalContainer}>
                <Banner />
                <FlatList
                    data={columns}
                    renderItem={({ item }) => <Column column={item} />}
                    keyExtractor={(item) => item.fieldName}
                />
                <Media openForm={() => setIsForm(true)} />
                <ButtonGenerator />
            </View>
        </View>
    );
}
