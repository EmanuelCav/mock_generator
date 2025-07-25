import { ReactNode, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Appearance } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemeMode } from '@rneui/themed';

import { userStore } from './app/store/user.store';

const Container = ({ children }: { children: ReactNode }) => {

    const { setMode } = useThemeMode();

    useEffect(() => {
        setMode(Appearance.getColorScheme() === "dark" ? "dark" : "light")
        userStore.updateMode(Appearance.getColorScheme() === "dark")
    }, [])
    
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