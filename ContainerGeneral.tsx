import React, { ReactNode, useEffect } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemeMode } from '@rneui/themed';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaWrapper>{children}</SafeAreaWrapper>
        </SafeAreaProvider>
    )
}

const SafeAreaWrapper = ({ children }: { children: ReactNode }) => {

    const insets = useSafeAreaInsets()
    const { theme } = useTheme()

    const { setMode } = useThemeMode()
    const colorScheme = useColorScheme()

    useEffect(() => {
        // if (colorScheme === "dark") {
        //     setMode("light")
        // } else if (colorScheme === "light") {
        //     setMode("dark")
        // } else {
        //     setMode("light")
        // }
        setMode("dark")

    }, [colorScheme])

    return (
        <View style={[styles.container, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor:
                theme.colors.background
        }]}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Container