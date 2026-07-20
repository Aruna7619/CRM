import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Quotations from "./pages/Quotations";
import Invoices from "./pages/Invoices";
import ClientManagement from "./pages/ClientManagement";
import Payments from "./pages/Payments";
import SocialMediaLibrary from "./pages/SocialMediaLibrary";
import SocialMediaTemplates from "./pages/SocialMediaTemplates";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* CRM */}
      <Route path="/leads" element={<Leads />} />
      <Route path="/quotations" element={<Quotations />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/clients" element={<ClientManagement />} />
      <Route path="/payments" element={<Payments />} />

      {/* Social Media */}
      <Route path="/social-media" element={<SocialMediaLibrary />} />
      <Route
        path="/social-media-templates"
        element={<SocialMediaTemplates />}
      />

      {/* Productivity */}
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/calendar" element={<Calendar />} />

      {/* Reports */}
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;