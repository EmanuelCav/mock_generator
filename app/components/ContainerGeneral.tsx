import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({ children }: { children: ReactNode }) => {

    return (
        <SafeAreaProvider>
            <SafeAreaWrapper>
                {children}
            </SafeAreaWrapper>
        </SafeAreaProvider>
    )
}

const SafeAreaWrapper = ({ children }: { children: ReactNode }) => {

    const insets = useSafeAreaInsets()

    return (
        <View className='bg-white dark:bg-black' style={[styles.container, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
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