import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdEventType, InterstitialAd, TestIds } from "react-native-google-mobile-ads";

import ContainerBackground from "./ContainerBackground";

import { DownloadViewPropsType } from "../types/config.types";

import { userStore } from "../store/user.store";

import { extensionFile } from "../utils/data";

const adUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : `${process.env.EXPO_PUBLIC_INTERSTICIAL}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ["fashion", "clothing"],
});

const DownloadView = ({ setIsGenerated, handleDownload, loading, text, setIsDownloaded, isDownloaded, handleShare, t }: DownloadViewPropsType) => {

    const [isInterstitialLoaded, setIsInterstitialLoaded] = useState(false);

    useEffect(() => {

        const loadInterstitialAd = () => {
            try {
                interstitial.load();
            } catch (error) {
                console.error("Error loading interstitial ad:", error);
            }
        };

        const unsubscribeLoaded = interstitial.addAdEventListener(
            AdEventType.LOADED,
            () => {
                setIsInterstitialLoaded(true);
            }
        );

        const unsubscribeClosed = interstitial.addAdEventListener(
            AdEventType.CLOSED,
            () => {
                setIsInterstitialLoaded(false);
                loadInterstitialAd();
            }
        );

        loadInterstitialAd();

        return () => {
            unsubscribeLoaded();
            unsubscribeClosed();
        };

    }, []);


    const handleClose = async () => {

        try {

            const storedCount = await AsyncStorage.getItem("reviewCount");

            const count = storedCount ? parseInt(storedCount, 10) : 0;

            if ((interstitial.loaded || isInterstitialLoaded) && count > 2) {
                interstitial.show();
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsDownloaded(false);
            setIsGenerated(false);
        }
    };

    const fileName = userStore.historyData
        ? `${userStore.historyData.name}.${extensionFile(userStore.historyData.extension)}`
        : "";

    return (
        <ContainerBackground isField={false} onClose={handleClose}>

            <View className="w-full items-center px-6">

                <Text className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
                    {isDownloaded ? t("downloaded") : text}
                </Text>


                <Text className="mb-6 text-center text-base text-gray-600 dark:text-gray-300">
                    {fileName}
                </Text>


                {!isDownloaded ? (

                    <Pressable
                        onPress={handleDownload}
                        disabled={loading}
                        className={`w-full flex-row items-center justify-center gap-3 rounded-xl px-6 py-4 ${loading ? "bg-emerald-500/60" : "bg-emerald-500 active:opacity-80"}`}
                    >

                        {loading ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <>
                                <Feather
                                    name="download"
                                    size={20}
                                    color="#FFFFFF"
                                />

                                <Text className="text-base font-bold text-white">
                                    {t("download")}
                                </Text>
                            </>
                        )}

                    </Pressable>

                ) : (

                    <View className="w-full items-center rounded-xl bg-emerald-100 px-4 py-4 dark:bg-emerald-950">

                        <Feather
                            name="check-circle"
                            size={28}
                            color="#50C878"
                        />

                        <Text className="mt-2 text-center text-base font-semibold text-emerald-700 dark:text-emerald-400">
                            {t("downloadComplete")}
                        </Text>

                    </View>

                )}


                <Pressable
                    onPress={handleShare}
                    className="mt-5 w-full flex-row items-center justify-center gap-3 rounded-xl bg-indigo-500 px-6 py-4 active:opacity-80"
                >

                    <Feather
                        name="share-2"
                        size={20}
                        color="#FFFFFF"
                    />

                    <Text className="text-base font-bold text-white">
                        {t("share")}
                    </Text>

                </Pressable>


                <Pressable
                    onPress={handleClose}
                    className="mt-5 w-full items-center justify-center rounded-xl bg-red-500 px-6 py-4 active:opacity-80"
                >

                    <Text className="text-base font-bold text-white">
                        {t("cancel")}
                    </Text>

                </Pressable>

            </View>

        </ContainerBackground>
    );
};

export default DownloadView;