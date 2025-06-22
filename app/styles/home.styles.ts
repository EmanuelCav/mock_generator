import { Dimensions, StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    mediaContainer: {
        width: '100%',
        justifyContent: 'space-between',
        padding: Dimensions.get("window").height / 74,
        flexDirection: 'row',
        alignItems: 'center',
    },

    containerBackground: {
        position: 'absolute',
        zIndex: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get("window").width / 36,
        flex: 1,
    },

    cardBackground: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        width: '100%',
        flexGrow: 0,
        padding: Dimensions.get("window").width / 36,
        position: 'relative',
        maxHeight: Dimensions.get("window").height / 1.05,
        marginVertical: Dimensions.get("window").height / 74,
    },

    containerBanner: {
        height: '8%'
    },

    ButtonGeneratorContainer: {
        width: '100%',
        justifyContent: 'center',
        height: '10%'
    }

})