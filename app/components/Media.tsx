import { View } from 'react-native'
import { Icon } from '@rneui/base'

import AddColumn from './media/AddColumn'

import { MediaPropsType } from '../types/home.types'

import { homeStyles } from '../styles/home.styles'

const Media = ({ openForm }: MediaPropsType) => {
    return (
        <View style={homeStyles.mediaContainer}>
            <AddColumn openForm={openForm} />
            <Icon name="settings" color="#607d8b" size={20} />
        </View>

    )
}

export default Media