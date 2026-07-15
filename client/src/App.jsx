import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import CRMAdminDashboard from "./pages/CRMAdminDashboard";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Admin Dashboard */}
      <Route path="/admin-dashboard" element={<CRMAdminDashboard />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;