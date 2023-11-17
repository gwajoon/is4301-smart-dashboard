"use client";
import React, { useState } from "react";
import { Container, Typography, Paper, Button } from "@mui/material";
import { chatDetails } from "../../consts";

const ChatDetails = ({ params }: { params: { chatId: string } }) => {
  const [sentimentAnalysisType, setSentimentAnalysisType] = useState("agent");

  const handleSentimentAnalysisType = () => {
    sentimentAnalysisType == "agent"
      ? setSentimentAnalysisType("customer")
      : setSentimentAnalysisType("agent");
  };
  return (
    <Container>
      <Typography variant="h4" className="mt-6">
        Chat Details{" "}
      </Typography>
      <Button
        variant="contained"
        onClick={handleSentimentAnalysisType}
        sx={{ marginY: 3 }}>
        {sentimentAnalysisType == "agent"
          ? "View Customer Sentiment Analysis"
          : "View Agent Sentiment Analysis"}
      </Button>
      <Paper elevation={3} style={{ padding: "16px" }}>
        {chatDetails
          .filter((chatDetail) => chatDetail.chatId.toString() == params.chatId)
          .map((chatDetail, index) => (
            <Container key={index}>
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
                Customer Satisfaction Score:
                {chatDetail.customerSatisfactionScore}
              </Typography>
              <Typography variant="body2">Chat Content:</Typography>
              {chatDetail.chatContent.map((line, index) => {
                let backgroundColor = "";

                if (
                  line.includes("[Negative]") &&
                  sentimentAnalysisType == "agent"
                ) {
                  backgroundColor = "red";
                } else if (
                  line.includes("[Positive]") &&
                  sentimentAnalysisType == "agent"
                ) {
                  backgroundColor = "lime";
                } else if (
                  line.includes("[Satisfied]") &&
                  sentimentAnalysisType == "customer"
                ) {
                  backgroundColor = "lightgreen";
                } else if (
                  line.includes("[Dissatisfied]") &&
                  sentimentAnalysisType == "customer"
                ) {
                  backgroundColor = "lightcoral";
                }

                return (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ marginY: 3, backgroundColor }}>
                    {line}
                  </Typography>
                );
              })}
            </Container>
          ))}
      </Paper>
    </Container>
  );
};

export default ChatDetails;
