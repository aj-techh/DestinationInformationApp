import './App.css';
import { useState } from 'react';
import PageNav from './components/components/PageNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationDisplay from './components/components/DestinationDisplay';
import DestinationInfo from './components/components/DestinationInfo';
import { Row, Col } from 'react-bootstrap';


function App() {
  const [destInf, setdestInf] = useState('');
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <PageNav setDestInf={setdestInf}/>
            <Row>
              <Col md={6}>
                <DestinationDisplay destInf={destInf}/>
              </Col>
              <Col md={6}>
                <DestinationInfo destInf={destInf}/>
              </Col>
            </Row>
          </>
        }/>
        <Route path="*" element={
          <>
            <PageNav />
            <span>uh oh</span>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
