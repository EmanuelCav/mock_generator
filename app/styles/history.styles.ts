import { Dimensions, StyleSheet } from 'react-native';

export const historyStyles = StyleSheet.create({
    containActions: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-between'
    },

    containHistoryElements: {
        marginVertical: Dimensions.get("window").height / 92.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get("window").height / 4,
        flexDirection: 'row',
        padding: Dimensions.get("window").height / 74,
        borderRadius: 8,
    }
})