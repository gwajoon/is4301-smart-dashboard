"use client";
import React, { useState, useEffect } from "react";
import annyang from "annyang";
import { Button } from "@mui/material";

const VoiceInput = () => {
  const [recognizedText, setRecognizedText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [listenState, setListenState] = useState(false);

  const startListening = () => {
    annyang.start();
    setListenState(true);
  };

  const stopListening = () => {
    annyang.abort();
    setListenState(false);
  };

  useEffect(() => {
    annyang.addCallback("result", (phrases) => {
      const recognizedText = phrases[0];
      setRecognizedText(`Customer said: ${recognizedText}`);
      generateResponse(recognizedText);
    });

    annyang.addCommands({
      hello: () =>
        setResponseText(
          "Hello! My name is <Your Name>. How can I assist you today?"
        ),
      "what are your opening hours": () =>
        setResponseText("Our opening hours are 9am to 6pm."),
      "what is the number for the jurong outlet": () =>
        setResponseText("The number for the Jurong outlet is +65 9052 1234."),
      "what is the number for the Marina Bay Outlet": () =>
        setResponseText(
          "The number for the Marina Bay outlet is +65 8888 5678."
        ),
      "tell me about your services": () =>
        setResponseText(
          "We provide a variety of services, such as credit check loans, investment services and mobile banking. Which would you like to find out more about?"
        ),
      "I am disappointed with your service": () =>
        setResponseText(
          "I understand that you're frustrated, and I apologize for any inconvenience."
        ),
      "can you be more helpful": () =>
        setResponseText(
          "I understand that you're frustrated, and I apologize for any inconvenience."
        ),
      "can you hurry up": () =>
        setResponseText(
          "I understand that you're frustrated, and I apologize for any inconvenience."
        ),
      "generate response *text": (text) => generateResponse(text),
    });

    return () => {
      annyang.removeCallback("result");
      annyang.removeCommands();
      stopListening();
    };
  }, []);

  const generateResponse = (inputText) => {
    setResponseText(`You said: ${inputText}`);
  };

  return (
    <div className="text-center mt-5">
      {!listenState && (
        <Button onClick={startListening}>
          Start Real Time Recommendations
        </Button>
      )}
      {listenState && <Button onClick={stopListening}>Stop Listening</Button>}
      <div className="mb-8">
        <h2 className="text-600">Customer said</h2>
        <p className="text-base leading-6">{recognizedText}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-green-600">
          Recommended information to respond with
        </h2>
        <p className="text-base leading-6">{responseText}</p>
      </div>
    </div>
  );
};

export default VoiceInput;
