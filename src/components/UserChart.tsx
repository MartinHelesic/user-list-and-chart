import React from "react";
import { Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { User } from "../features/userSlice";

function UserChart() {
  const users = useAppSelector((state: RootState) => state.users.users);

  const data = users.map((user: User) => ({
    name: user.name,
    emailLength: user.email.length,
  }));

  return (
    <>
      <Typography variant="h2">User chart:</Typography>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="emailLength" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export default UserChart;
