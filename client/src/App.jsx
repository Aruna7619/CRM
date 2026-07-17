import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";


import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Quotations from "./pages/Quotations";
import Invoices from "./pages/Invoices";

import ClientManagement from "./pages/ClientManagement";

function App() {
  return (
    <Routes>


      {/* Login Page */}
      <Route path="/" element={<Login />} />
      
      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
     
      <Route path="/leads" element={<Leads />} />
      <Route path="/quotations" element={<Quotations />} />
      <Route path="/invoices" element={<Invoices />} />

      <Route path="/clients" element={<ClientManagement />} />

    </Routes>
  );
}

export default App;