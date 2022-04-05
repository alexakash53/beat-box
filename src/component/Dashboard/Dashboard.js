import React from 'react';
import './Dashboard.css'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis , CartesianGrid, Legend} from 'recharts';

const Dashboard = () => {
    const data = [{
            "week": "sun",
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "week": "mon",
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "week": "tue",
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "week": "wed",
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "week": "thu",
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "fri",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]


    return (
        <div className='container'>
            <div className="chat-area">
                <div className="single-chart">
                     <LineChart
                        width={600}
                        height={350}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="week" stroke="#82ca9d" />
                     </LineChart>
                </div>
                <div className="single-chart">
                    <PieChart width={300} height={300}>
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="week" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Pie data={data} dataKey="month" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;