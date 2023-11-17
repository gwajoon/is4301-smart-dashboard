"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { chats } from "@/app/consts";

const Chats = ({ params }: { params: { agentId: string } }) => {
  const router = useRouter();

  return (
    <Container>
      <Typography variant="h4" className="mt-6">
        Chat
      </Typography>
      <List>
        {chats
          .filter((chat) => {
            return chat.agentId.toString() == params.agentId;
          })
          .map((chat) => (
            <ListItem
              key={chat.id}
              button
              onClick={() => router.push(`/chatDetails/${chat.id}`)}>
              <ListItemText
                primary={`Issue Summary: ${chat.issue}`}
                secondary={`Date: ${chat.chatDate} - Score: ${chat.score}`}
              />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Chats;
