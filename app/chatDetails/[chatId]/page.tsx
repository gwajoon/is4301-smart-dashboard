import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { chatDetails } from "../../consts";

const ChatDetails = ({ params }: { params: { chatId: string } }) => {
  return (
    <Container>
      <Typography variant="h4">Chat Details</Typography>
      <Paper elevation={3} style={{ padding: "16px" }}>
        {chatDetails
          .filter((chatDetail) => chatDetail.chatId.toString() == params.chatId)
          .map((chatDetail) => (
            <Container>
              <Typography variant="h5">
                Agent: {chatDetail.agentName}
              </Typography>
              <Typography variant="body1">
                Date: {chatDetail.chatDate}
              </Typography>
              <Typography variant="body1">
                Response Time: {chatDetail.responseTime}
              </Typography>
              <Typography variant="body1">
                Resolution Rate: {chatDetail.resolutionRate}
              </Typography>
              <Typography variant="body1">
                Customer Satisfaction Score:{" "}
                {chatDetail.customerSatisfactionScore}
              </Typography>
              <Typography variant="body2">Chat Content:</Typography>
              <Typography variant="body1">{chatDetail.chatContent}</Typography>
            </Container>
          ))}
      </Paper>
    </Container>
  );
};

export default ChatDetails;
