import { View } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import { homeStyles } from '../styles/home.styles';

const adUnitId = __DEV__ ? TestIds.BANNER : `${process.env.EXPO_PUBLIC_BANNER}`;

const Banner = () => {
    return (
        <View style={homeStyles.containerBanner}>
            <BannerAd
                unitId={adUnitId as string}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    )
}

export default Banner