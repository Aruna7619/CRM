import { Routes, Route } from "react-router-dom";
import CRMAdminDashboard from "./pages/CRMAdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CRMAdminDashboard />} />
    </Routes>
  );
}

export default App;