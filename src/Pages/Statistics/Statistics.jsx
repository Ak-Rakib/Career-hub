import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector1 from "../../assets/All Images/Vector-1.png";
import { useLoaderData } from "react-router-dom";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="relative bg-base-200 h-64 mb-28 flex items-center justify-center">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Statistics
        </h1>
        <img
          src={vector1}
          alt=""
          className="absolute top-0 right-0 h-24 w-24"
        />
        <img
          src={vector}
          alt=""
          className="absolute bottom-0 left-0 h-24 w-24"
        />
      </div>
      <div className="mb-10">
        <ResponsiveContainer width="95%" height={400}>
          <LineChart
            className="chart"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
