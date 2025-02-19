import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Math", score: 85 },
  { name: "Science", score: 78 },
  { name: "English", score: 92 },
  { name: "History", score: 74 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Student Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#4F46E5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;