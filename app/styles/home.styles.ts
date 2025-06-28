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
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get("window").width / 36,
        flex: 1,
    },

    cardBackground: {
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
    },

    columnSelect: {
        flexDirection: 'row',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: Dimensions.get('window').height / 106,
        paddingVertical: Dimensions.get('window').height / 67.27,
        borderWidth: 2,
        borderColor: '#50C878',
        borderStyle: 'solid'
    },

    containerNotFields: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleNotFields: {
        fontWeight: 'bold',
        fontSize: Dimensions.get("window").height / 47,
        color: "#32CD32"
    }

})