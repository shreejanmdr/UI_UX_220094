import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = {
  "Getting Started": [
    {
      question: "What is ForRent?",
      answer: "ForRent is a platform that connects property owners with renters looking for homes, apartments, and rooms.",
    },
    {
      question: "How do I create an account?",
      answer: "Click on 'Register' on the homepage and fill out your details to get started.",
    },
  ],
  Tenants: [
    {
      question: "How can I search for properties?",
      answer: "Use the search bar to filter properties by location, price, and type.",
    },
    {
      question: "Can I save properties for later?",
      answer: "Yes, use the 'Wishlist' feature to save properties you're interested in.",
    },
  ],
  Owner: [
    {
      question: "How do I list a property?",
      answer: "Click on 'Post Property' and provide the required details, including photos and descriptions.",
    },
    {
      question: "What if I need to edit my property listing?",
      answer: "Go to 'My Dashboard' and select the property you want to edit.",
    },
  ],
  Buy: [
    {
      question: "Can I buy properties on ForRent?",
      answer: "Yes, explore the 'Buy' section to find properties available for purchase.",
    },
    {
      question: "How does the buying process work?",
      answer: "Contact the seller directly or use the inquiry form to start the buying process.",
    },
  ],
  Sale: [
    {
      question: "How do I sell a property on ForRent?",
      answer: "Create an account, click 'Post Property,' and upload all necessary details.",
    },
    {
      question: "How does ForRent promote my property?",
      answer: "We use digital marketing and direct communication with potential buyers and renters.",
    },
  ],
};

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("Getting Started");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 10}}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
      >
        Frequently Asked Questions
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        {Object.keys(faqData).map((category) => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {faqData[activeTab].map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQPage;