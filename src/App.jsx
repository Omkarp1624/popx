// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import all your page components
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AccountSettings from './pages/AccountSettings';

// === ADD THIS IMPORT ===
// src/App.jsx
// ... other imports
// src/App.jsx

// ... all your imports ...
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Router>
        {/* ADD THIS WRAPPER DIV */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<AccountSettings />} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;