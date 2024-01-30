import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Calculator from './pages/Calculator.tsx'
import Home from './pages/Home.tsx'
import Hobbies from './pages/Hobbies.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Calculator">Calculator</Nav.Link>
            <Nav.Link href="JSON">JSON</Nav.Link>
            <Nav.Link href="Hobbies">Hobbies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <BrowserRouter>
   
      
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
