import { View } from 'react-native'
import { Button } from '@rneui/themed'

import AddColumn from './media/AddColumn'

import { MediaPropsType } from '../types/home.types'

import { homeStyles } from '../styles/home.styles'

const Media = ({ openForm, openOptions }: MediaPropsType) => {
    return (
        <View style={homeStyles.mediaContainer}>
            <AddColumn openForm={openForm} />
            <Button
                icon={{
                    name: 'menu',
                    color: 'white',
                }}
                buttonStyle={{ backgroundColor: '#50C878' }}
                onPress={openOptions}
            />
        </View>

    )
}

export default Media