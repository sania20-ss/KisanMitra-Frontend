// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from '../src/pages/Dashboard'
import FarmerDashboard from '../src/pages/FarmerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard/>} />
        <Route pth="/farmer" element={<FarmerDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
