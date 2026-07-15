import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";


import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

function App() {
  return (
    <Routes>


      {/* Login Page */}
      <Route path="/" element={<Login />} />

      

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />


      
      
      <Route path="/leads" element={<Leads />} />

    </Routes>
  );
}

export default App;