export const agents = [
  { id: 1, name: "James" },
  { id: 2, name: "Fatimah" },
  { id: 3, name: "Julia" },
  { id: 4, name: "Gayle" },
];

export const chats = [
  {
    id: 1,
    agentId: 1,
    issue: "Change Contact Details (Mobile Number)",
    chatDate: "2023-11-02",
    score: 8,
  },
  {
    id: 2,
    agentId: 1,
    issue: "Enquiry regarding opening hours",
    chatDate: "2023-11-01",
    score: 9,
  },
  {
    id: 3,
    agentId: 2,
    issue: "Enquiry regarding closing hours",
    chatDate: "2023-11-01",
    score: 5,
  },
];

export const chartData = {
  James: [
    { date: "2023-11-10", positive: 12, negative: 0 },
    { date: "2023-11-11", positive: 10, negative: 1 },
    { date: "2023-11-12", positive: 11, negative: 0 },
    { date: "2023-11-13", positive: 17, negative: 0 },
    { date: "2023-11-14", positive: 17, negative: 0 },
    { date: "2023-11-15", positive: 13, negative: 1 },
    { date: "2023-11-16", positive: 9, negative: 1 },
  ],
  Fatimah: [
    { date: "2023-11-10", positive: 3, negative: 0 },
    { date: "2023-11-11", positive: 5, negative: 1 },
    { date: "2023-11-12", positive: 5, negative: 1 },
    { date: "2023-11-13", positive: 8, negative: 2 },
    { date: "2023-11-14", positive: 5, negative: 2 },
    { date: "2023-11-15", positive: 8, negative: 1 },
    { date: "2023-11-16", positive: 4, negative: 2 },
  ],
  Julia: [
    { date: "2023-11-10", positive: 7, negative: 0 },
    { date: "2023-11-11", positive: 6, negative: 0 },
    { date: "2023-11-12", positive: 11, negative: 0 },
    { date: "2023-11-13", positive: 11, negative: 0 },
    { date: "2023-11-14", positive: 7, negative: 1 },
    { date: "2023-11-15", positive: 13, negative: 0 },
    { date: "2023-11-16", positive: 9, negative: 1 },
  ],
  Gayle: [
    { date: "2023-11-10", positive: 2, negative: 0 },
    { date: "2023-11-11", positive: 4, negative: 1 },
    { date: "2023-11-12", positive: 11, negative: 0 },
    { date: "2023-11-13", positive: 17, negative: 0 },
    { date: "2023-11-14", positive: 17, negative: 0 },
    { date: "2023-11-15", positive: 13, negative: 1 },
    { date: "2023-11-16", positive: 9, negative: 1 },
  ],
  Total: [
    { date: "2023-11-10", positive: 24, negative: 0 },
    { date: "2023-11-11", positive: 25, negative: 3 },
    { date: "2023-11-12", positive: 38, negative: 1 },
    { date: "2023-11-13", positive: 53, negative: 2 },
    { date: "2023-11-14", positive: 50, negative: 3 },
    { date: "2023-11-15", positive: 47, negative: 3 },
    { date: "2023-11-16", positive: 31, negative: 5 },
  ],
};

export const chatDetails = [
  {
    chatId: 1,
    agentName: "James",
    chatDate: "2023-11-02",
    responseTime: "10 seconds",
    resolutionRate: "90%",
    customerSatisfactionScore: 8,
    chatContent: [
      "Chat Agent: Hello! This is OneCallAway customer support. How can I assist you today?",

      "[Neutral]Customer: Hi, I need to change my mobile phone number on my account.",

      "[Positive]Chat Agent: I'd be happy to help you with that. To update your mobile number, I'll need to verify your identity. Can you please provide your current mobile number and any other details associated with your account?",

      "[Neutral]Customer: My current mobile number is <customer current mobile number>, and my account email is <customer email>",

      "[Positive]Chat Agent: Thank you for the information. I've located your account. To update your mobile number, please provide the new mobile number you'd like to use.",

      "Customer: My new mobile number is <customer new mobile number>.",

      "[Positive]Chat Agent: Great! I'll update your mobile number to the new one. Please hold on for a moment while I make the change.",

      "[Satisfied]Customer: Sure, take your time.",

      "[Positive]Chat Agent: Your mobile number has been successfully updated to (new phone number). Is there anything else I can assist you with today?",
      "Customer: No, that's all. Thank you for your help!",

      "Chat Agent: You're welcome! If you have any more questions in the future, feel free to reach out. Have a great day!",
    ],
  },
  {
    chatId: 3,
    agentName: "Fatimah",
    chatDate: "2023-11-02",
    responseTime: "40 seconds",
    resolutionRate: "60%",
    customerSatisfactionScore: 5,
    chatContent: [
      "Chat Agent: Hello! This is OneCallAway customer support. How can I assist you today?",

      "[Neutral] Customer: Hi, I need to change my mobile phone number on my account.",

      "[Positive] Chat Agent: I'd be happy to help you with that. To update your mobile number, I'll need to verify your identity. Can you please provide your current mobile number and any other details associated with your account?",

      "[Neutral] Customer: My current mobile number is <customer current mobile number>, and my account email is <customer email>",

      "[Positive] Chat Agent: Thank you for the information. I've located your account. To update your mobile number, please provide the new mobile number you'd like to use.",

      "[Neutral] Customer: My new mobile number is <customer new mobile number>.",

      "[Positive] Chat Agent: Great! I'll update your mobile number to the new one. Please hold on for a moment while I make the change.",

      "[Neutral] Customer: Sure, take your time.",

      "[Negative] Chat Agent: I'm sorry, but there seems to be an issue updating your mobile number. We're currently experiencing technical difficulties. I apologize for the inconvenience. Please try again later or contact us for further assistance.",

      "[Dissatisfied] Customer: This is frustrating. I really need to update my number. Is there anything else I can do?",

      "[Negative] Chat Agent: I understand your frustration, and I apologize for the inconvenience. Unfortunately, the issue seems to be on our end, and we're working to resolve it as quickly as possible. In the meantime, you may try again later or contact our support team for assistance.",

      "[Dissatisfied] Customer: This is unacceptable. How long will it take to resolve this issue?",

      "[Negative] Chat Agent: I'm truly sorry for the inconvenience. We don't have an exact timeframe for resolution at the moment. Our technical team is actively working on it. We appreciate your patience and understanding during this time.",

      "[Dissatisfied] Customer: This is really disappointing. I expected better service.",

      "Chat Agent: I apologize for the inconvenience you're facing. If there's anything else I can assist you with or if you have further questions, please let me know.",

      "Customer: No, that's all. Thank you for your help!",

      "Chat Agent: You're welcome! If you have any more questions in the future, feel free to reach out. Have a great day!",
    ],
  },
];
