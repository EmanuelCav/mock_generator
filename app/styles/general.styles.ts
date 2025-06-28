import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    generalContainer: {
        flex: 1,
        width: '100%',
        paddingVertical: Dimensions.get("window").height / 37,
        paddingHorizontal: Dimensions.get("window").width / 36
    },

    containerClose: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    buttonClose: {
        position: 'static',
    }

})