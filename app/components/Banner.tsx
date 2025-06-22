import { Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import { homeStyles } from '../styles/home.styles'

const Banner = () => {
    return (
        <View style={homeStyles.containerBanner}>
            <Text>Banner</Text>
        </View>
    )
}

export default Banner