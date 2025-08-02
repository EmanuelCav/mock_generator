import { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Button, Text } from '@rneui/themed'
import i18n from '../../i18n'
import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

import ContainerBackground from './ContainerBackground'
import Close from './Close'

import { DownloadViewPropsType } from '../types/config.types'

import { homeStyles } from '../styles/home.styles'

import { userStore } from '../store/user.store'

import { extensionFile } from '../utils/data'

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${process.env.EXPO_PUBLIC_INTERSTICIAL}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const DownloadView = ({ colors, setIsGenerated, handleDownload, loading, text, setIsDownloaded, isDownloaded, handleShare }: DownloadViewPropsType) => {

    const [isIntersitialLoaded, setIsIntersitialLoaded] = useState<boolean>(false)

    useEffect(() => {

        const loadInterstitialAd = () => {
            try {
                interstitial.load();
            } catch (error) {
                console.error("Error loading interstitial ad:", error);
            }
        };

        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setIsIntersitialLoaded(true)
        });

        const unsubscribedClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
            setIsIntersitialLoaded(false)
            loadInterstitialAd();
        });

        loadInterstitialAd();

        return () => {
            unsubscribeLoaded()
            unsubscribedClosed()
        };
    }, []);

    const handleClose = () => {

        try {

            if (interstitial.loaded || isIntersitialLoaded) {
                interstitial.show()
            }

        } catch (error) {
            console.log(error)
        }

        setIsDownloaded(false)
        setIsGenerated(false)

    }

    return (
        <ContainerBackground colors={colors}>

            <Close handleClose={handleClose} />

            {
                isDownloaded ?
                    <Text style={homeStyles.downloadTitle}>{i18n.t("downloaded")}</Text>
                    : <Text style={homeStyles.downloadTitle}>{text}</Text>
            }

            <Text style={{ color: colors.white, marginBottom: Dimensions.get("window").height / 106 }}>
                {`${userStore.historyData?.name}.${extensionFile(userStore.historyData?.extension!)}`}
            </Text>

            {
                !isDownloaded ?
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
                    /> : <Text style={{ color: colors.white }}>
                        {i18n.t("downloadComplete")}
                    </Text>
            }

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
                onPress={handleClose}
            />

        </ContainerBackground>
    )
}

export default DownloadView