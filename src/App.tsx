import React from "react";
import { Container, Typography } from "@mui/material";
import UserList from "./components/UserList";
import UserChart from "./components/UserChart";

function App() {
  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        User list and chart
      </Typography>
      <UserList />
      <UserChart />
    </Container>
  );
}

export default App;
