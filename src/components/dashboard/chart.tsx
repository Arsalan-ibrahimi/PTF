'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -2800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 2908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: -1890,
    pv: 4000,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App() {
  return (
   <div className=" " style={{ width: '100%', height: 'auto' }}>
    <ResponsiveContainer>
     <BarChart
      
      data={data}
    
    >
      <CartesianGrid strokeDasharray="1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#006769" radius={[3, 5, 0, 0]}/>
      <Bar dataKey="uv" fill="#40A578" radius={[3, 5, 0, 0]}/>
    </BarChart>
   </ResponsiveContainer>
   </div>
  );
}
