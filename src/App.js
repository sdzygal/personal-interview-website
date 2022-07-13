import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import{ Skills } from "./Components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;

