"use client";
import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { agents, chartData } from "../consts";

const CustomerServiceChart = () => {
  const [selectedAgent, setSelectedAgent] = useState("Total");

  const handleAgentChange = (event) => {
    setSelectedAgent(event.target.value);
  };

  const agentData = chartData[selectedAgent];

  return (
    <div className="text-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={agentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="positive" stackId="a" fill="#82ca9d" />
          <Bar dataKey="negative" stackId="a" fill="#f45531" />
        </BarChart>
      </ResponsiveContainer>
      <h3 className="mt-8 text-center">
        {selectedAgent} Customer Service Interactions
      </h3>
      <Select
        value={selectedAgent}
        onChange={handleAgentChange}
        className="mx-auto mt-4 mb-4">
        <MenuItem value={"Total"}>Total</MenuItem>
        {agents.map((agent) => (
          <MenuItem key={agent.id} value={agent.name}>
            {agent.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomerServiceChart;
