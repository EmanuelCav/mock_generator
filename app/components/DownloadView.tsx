import { Dimensions } from 'react-native'
import { Button, Text } from '@rneui/themed'
import i18n from '../../i18n'

import ContainerBackground from './ContainerBackground'
import Close from './Close'

import { DownloadViewPropsType } from '../types/config.types'

import { homeStyles } from '../styles/home.styles'

const DownloadView = ({ colors, setIsGenerated, handleDownload, loading }: DownloadViewPropsType) => {
    return (
        <ContainerBackground colors={colors}>

            <Close handleClose={() => setIsGenerated(false)} />

            <Text style={homeStyles.downloadTitle}>{i18n.t("fileGenerated")}</Text>

            <Button
                title={i18n.t("download")}
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
                title={i18n.t("cancel")}
                buttonStyle={{
                    backgroundColor: "#ff0000",
                    marginTop: Dimensions.get("window").height / 106
                }}
                onPress={() => setIsGenerated(false)}
            />

        </ContainerBackground>
    )
}

export default DownloadView