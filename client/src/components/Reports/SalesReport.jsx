import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../styles/salesReport.css";

const data = [
  { month: "Jan", sales: 120000 },
  { month: "Feb", sales: 185000 },
  { month: "Mar", sales: 145000 },
  { month: "Apr", sales: 220000 },
  { month: "May", sales: 260000 },
  { month: "Jun", sales: 300000 },
];

const SalesReport = () => {
  return (
    <div className="sales-report">

      <div className="sales-header">
        <h3>Monthly Sales Report</h3>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SalesReport;