import { View } from 'react-native'
import { Button } from '@rneui/themed'

import AddColumn from './media/AddColumn'

import { MediaPropsType } from '../types/home.types'

import { homeStyles } from '../styles/home.styles'

const Media = ({ openForm, openOptions, openPreview, isRefreshData }: MediaPropsType) => {
    return (
        <View style={homeStyles.mediaContainer}>
            <AddColumn openForm={openForm} />
            <View style={homeStyles.containButtonsHome}>
                <Button
                    icon={{
                        name: 'eye',
                        type: 'feather',
                        color: 'white',
                    }}
                    loading={isRefreshData}
                    disabled={isRefreshData}
                    buttonStyle={{ backgroundColor: '#50C878' }}
                    onPress={openPreview}
                />
                <Button
                    icon={{
                        name: 'menu',
                        color: 'white',
                    }}
                    buttonStyle={{ backgroundColor: '#50C878' }}
                    onPress={openOptions}
                />
            </View>
        </View>

    )
}

export default Media