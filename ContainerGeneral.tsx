import React, { ReactNode, useEffect } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemeMode } from '@rneui/themed';

import { userStore } from './app/store/user.store';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle={"default"} />
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
        if (userStore.isThemeChanged) {
            setMode(userStore.isDarkMode ? "dark" : "light")
        } else {
            const shouldUseDark = colorScheme === "dark"
            setMode(shouldUseDark ? "dark" : "light")
            userStore.handleTheme(shouldUseDark)
        }
    }, [colorScheme])

    return (
        <View style={[styles.container, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
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