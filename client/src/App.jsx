import { Routes, Route } from "react-router-dom";
import CRMAdminDashboard from "./pages/CRMAdminDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin-dashboard"
        element={<CRMAdminDashboard />}
      />
    </Routes>
  );
}

export default App;