import { Button, Text } from '@rneui/themed'
import i18n from '../../i18n'

import ContainerBackground from './ContainerBackground'
import Close from './Close'

import { DownloadViewPropsType } from '../types/config.types'

import { homeStyles } from '../styles/home.styles'

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

            <Button
                title={i18n.t("download")}
                icon={{
                    name: 'share',
                    color: 'white',
                }}
                buttonStyle={{
                    backgroundColor: "#5164c8"
                }}
                onPress={handleShare}
            />

        </ContainerBackground>
    )
}

export default DownloadView