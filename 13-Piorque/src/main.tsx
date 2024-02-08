// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import stylesheets and components
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator.tsx';
import Home from './pages/Home.tsx';
import Hobbies from './pages/Hobbies.tsx';
import JSON from './pages/JSON.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar'; // Import your CustomNavbar component
import { Container } from 'react-bootstrap';

// Main component
const App: React.FC = () => {
  return (
    <React.StrictMode>
      <CustomNavbar /> {/* Include your CustomNavbar component */}
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}></Route> {/* Route for the Home page */}
            <Route path="/calculator" element={<Calculator/>}></Route> {/* Route for the Calculator page */}
            <Route path="/hobbies" element={<Hobbies/>}></Route> {/* Route for the Hobbies page */}
            <Route path="/JSON" element={<JSON/>}></Route> {/* Route for the JSON page */}
          </Routes>
        </BrowserRouter>
      </Container>
    </React.StrictMode>
  );
};

// Render the App component inside the root element of the HTML document
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
