import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    generalContainer: {
        flex: 1,
        width: '100%',
        paddingVertical: Dimensions.get("window").height / 37,
        paddingHorizontal: Dimensions.get("window").width / 36
    },

    buttonClose: {
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'flex-end',
        position: 'static'
    }

})