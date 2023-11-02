"use client";

import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { agents } from "./consts";

const AgentList = () => {
  const router = useRouter();
  return (
    <>
      <Typography variant="h4">Agent List</Typography>
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
    </>
  );
};

export default AgentList;
