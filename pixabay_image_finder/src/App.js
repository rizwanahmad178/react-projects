import './App.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
// import { ThemeProvider as MuiThemeProvider } from '@mui/system';    from '@mui/material/styles/ThemeProvider';

import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
      </div>
    </ThemeProvider> 
  );
}

export default App;
