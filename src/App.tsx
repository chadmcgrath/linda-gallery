import React from 'react';
import Home from './Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
    </div>
  );
}
export default App;