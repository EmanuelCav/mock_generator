import { createTheme } from '@rneui/themed';

export const theme = createTheme({
    lightColors: {
        background: '#121212',
        primary: '#3E3E3E',
        white: "#FFFFFF"
    },
    darkColors: {
        background: '#F2F2F2',
        primary: '#FFFFFF',
        white: "#111111"
    },
    components: {
        Button: {
            raised: true,
        }
    }
})