"use client";

import React from "react";
import { Button, Container, Input, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <Input placeholder="Enter Username" sx={{ marginRight: "20px" }} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
