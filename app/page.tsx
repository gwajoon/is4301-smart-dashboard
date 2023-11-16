"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { agents } from "./consts";

const AgentList = () => {
  const router = useRouter();

  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" style={{ marginTop: "20px" }}>
        Agent List
      </Typography>
      <List>
        {agents.map((agent: any) => (
          <ListItem
            key={agent.id}
            button
            onClick={() => router.push(`/chats/${agent.id}`)}>
            <ListItemText primary={"Agent " + agent.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AgentList;
