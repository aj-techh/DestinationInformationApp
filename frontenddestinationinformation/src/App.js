import logo from './logo.svg';
import './App.css';
import PageNav from './components/components/PageNav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <PageNav />
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
