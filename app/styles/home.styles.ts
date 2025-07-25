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
        padding: Dimensions.get("window").width / 36,
        position: 'relative'
    },

    containerBanner: {
        height: '8%',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        color: "#50C878",
        marginBottom: Dimensions.get("window").height / 74
    },

    downloadTitle: {
        color: "#50C878",
        fontWeight: 'bold',
        marginVertical: Dimensions.get("window").height / 74,
        textAlign: 'center',
        fontSize: Dimensions.get("window").height / 47
    },

    containColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Dimensions.get('window').height / 92.5,
        padding: 12,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleColumn: {
        fontWeight: '700',
        fontSize: 16,
    },
    subtitleColumn: {
        fontSize: 14,
        marginTop: 4,
    },
    actionsColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginRight: Dimensions.get('window').width / 25,
    },

})