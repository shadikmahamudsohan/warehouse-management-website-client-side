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
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        { name: "Page A", uv: 400 },
        { name: "Page A", uv: 300 },
        { name: "Page A", uv: 600 }
    ];

    return (
        <div>
            <h1>Dashboard</h1>
            <ResponsiveContainer className='chart' height={400}>
                <BarChart
                    className="barChart"
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    label="heaf"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={10} fill="#05386b" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;   