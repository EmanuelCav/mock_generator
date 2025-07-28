import { Dimensions, View } from 'react-native'
import { Button, Text } from '@rneui/themed'
import i18n from '../../i18n'

import ContainerBackground from './ContainerBackground'
import Close from './Close'

import { DownloadViewPropsType } from '../types/config.types'

import { homeStyles } from '../styles/home.styles'

import { userStore } from '../store/user.store'

import { extensionFile } from '../utils/data'

const DownloadView = ({ colors, setIsGenerated, handleDownload, loading, text, setIsDownloaded, isDownloaded, handleShare }: DownloadViewPropsType) => {
    return (
        <ContainerBackground colors={colors}>

            <Close handleClose={() => {
                setIsDownloaded(false)
                setIsGenerated(false)
            }} />

            {
                isDownloaded ?
                    <Text style={homeStyles.downloadTitle}>{i18n.t("downloaded")}</Text>
                    : <Text style={homeStyles.downloadTitle}>{text}</Text>
            }

            <Text style={{ color: colors.white, marginBottom: Dimensions.get("window").height / 106 }}>
                {`${userStore.historyData?.name}.${extensionFile(userStore.historyData?.extension!)}`}
            </Text>

            <Button
                title={i18n.t("download")}
                loading={loading}
                disabled={loading}
                icon={{
                    name: 'download',
                    color: 'white',
                }}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                disabledStyle={{
                    backgroundColor: '#50C878'
                }}
                onPress={handleDownload}
            />

            <View style={{ marginVertical: Dimensions.get("window").height / 74 }}>
                <Button
                    title={i18n.t("share")}
                    icon={{
                        name: 'share',
                        color: 'white',
                    }}
                    buttonStyle={{
                        backgroundColor: "#5164c8"
                    }}
                    onPress={handleShare}
                />
            </View>

            <Button
                title={i18n.t("cancel")}
                buttonStyle={{
                    backgroundColor: "#ff0000"
                }}
                onPress={() => {
                    setIsDownloaded(false)
                    setIsGenerated(false)
                }}
            />

        </ContainerBackground>
    )
}

export default DownloadView