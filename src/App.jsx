import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home';
import Projects from './containers/Projects';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <ScrollHandler /> {/* Ensures scrolling to the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

// Scroll Handler (Inline Implementation)
const ScrollHandler = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [pathname]);

  return null;
};

export default App;
