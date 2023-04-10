import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Assignment 1",
        mark: 60
    },
    {
        name: "Assignment 2",
        mark: 60
    },
    {
        name: "Assignment 3",
        mark: 60
    },
    {
        name: "Assignment 4",
        mark: 60
    },
    {
        name: "Assignment 5",
        mark: 58
    },
    {
        name: "Assignment 6",
        mark: 54
    },
    {
        name: "Assignment 7",
        mark: 60
    },
    {
        name: "Assignment 8",
        mark: 60
    }
];

const Statistics = () => {
    return (
        <div className="flex justify-center">
            <div>
                <ComposedChart
                    width={1100}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;