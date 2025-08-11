import { Dimensions, StyleSheet } from 'react-native';

export const configStyles = StyleSheet.create({

    platform: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: Dimensions.get("window").height / 74
    },

    modeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Dimensions.get("window").height / 37,
    },

    containConfig: {
        justifyContent: 'flex-start',
        flex: 1,
        width: '100%'
    }

})