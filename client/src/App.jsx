import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";


import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

import ClientManagement from "./pages/ClientManagement";

function App() {
  return (
    <Routes>


      {/* Login Page */}
      <Route path="/" element={<Login />} />

      

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />


      
      
      <Route path="/leads" element={<Leads />} />

      <Route path="/clients" element={<ClientManagement />} />

    </Routes>
  );
}

export default App;