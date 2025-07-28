import { createTheme } from '@rneui/themed';
import { Appearance } from 'react-native';

export const theme = createTheme({
    lightColors: {
        background: '#F2F2F2',
        primary: '#FFFFFF',
        white: "#111111"
    },
    darkColors: {
        background: '#121212',
        primary: '#3E3E3E',
        white: "#FFFFFF"
    },
    mode: Appearance.getColorScheme() === "dark" ? "dark" : "light",
    components: {
        Button: {
            raised: true,
        }
    }
})