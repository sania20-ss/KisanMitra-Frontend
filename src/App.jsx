// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from '../src/pages/Dashboard'
import FarmerDashboard from '../src/pages/FarmerDashboard';
import DriverDashboard from './pages/DriverDashboard';
import BuyerDashboard from './pages/BuyerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
