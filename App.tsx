import { ThemeProvider } from '@rneui/themed';

import Container from './ContainerGeneral';
import Home from './app/screens/Home';

import { theme } from './app/utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  )
}
