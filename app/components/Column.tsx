import React from 'react';
import { ListItem } from '@rneui/themed';

import { ColumnPropsType } from '../types/home.types';
import { Dimensions } from 'react-native';

const Column = ({ column }: ColumnPropsType) => {
    return (
        <ListItem bottomDivider
            containerStyle={{
                backgroundColor: '#f5f5f5',
                marginVertical: Dimensions.get("window").height / 92.5
            }}>
            <ListItem.Title style={{ color: 'black' }}>
                {column.fieldName}
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: 'gray' }}>
                {column.topic}
            </ListItem.Subtitle>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default Column;
