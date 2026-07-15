import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
    </Routes>
  );
}

export default App;