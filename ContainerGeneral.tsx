import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor='#32b2c2' />
            <SafeAreaWrapper>{children}</SafeAreaWrapper>
        </SafeAreaProvider>
    )
}

const SafeAreaWrapper = ({ children }: { children: ReactNode }) => {
    const insets = useSafeAreaInsets()

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
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