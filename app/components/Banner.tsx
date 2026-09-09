import { View } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : `${process.env.EXPO_PUBLIC_BANNER}`;

const Banner = () => {
    return (
        <View style={{
            height: '8%',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <BannerAd
                unitId={adUnitId as string}
                size={BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    )
}

export default Banner