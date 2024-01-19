import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import DoctorsPage from './pages/DoctorsPage';

function App() {
  const darkTheme = {
    colors: {
      heading: "rgb(255, 255, 255)",
      heading2: "rgb(24 24 29)",
      white: "#ffffff",
      black: "#000000",
      cyan: "#1ca9fe",
      green: "#4eac6d",
      danger: "#ff4e2b",
      light: "#223645",

      text: {
        primary: "#212529",
        secondary: "#8f9198",
      },

      bg: {
        black: "#000000",
        primary: "#262626",
        secondary: "#2e2e2e",
      },
      border2: {
        primary: "#FFFFFF26",
      },

      bg2: {
        primary: "#0c1631",
        secondary: "#0e1b38",
      },
      boxShadow: {
        primary: "rgba(1, 201 ,245, 0.4)",
      },

      hr: "#ffffff",
      border: "65, 66, 72",
      img_border: "31, 41, 55",
      gradient: "linear-gradient(145deg,#1ca9fe,#1c6ee9);",
    },
    media: {
      mobile: "800px",
      tab: "998px",
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/doctors' element={<DoctorsPage />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
