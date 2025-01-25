

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
      answer: "ForRent is a platform that connects property owners with renters looking for homes, apartments and rooms.",
    },
    {
      question: "How do I create an account?",
      answer: "Click on 'Register' on the homepage and fill out your details to get started.",
    },
  ],
  Tenants: [
    {
      question: "How can I search for properties?",
      answer: "Use the search bar to filter properties by location, price and type.",
    },
    {
      question: "Can I save properties for later?",
      answer: "Yes, use the 'Wishlist' feature to save properties you're interested in.",
    },
    {
      question: "Can I post a review?",
      answer: "Yes, use the 'rate and review' feature.",
    },
  ],
  Owner: [
    {
      question: "How do I list a property?",
      answer: "Send a request to 'Admin' and provide the required details, including photos and descriptions by clicking at 'Contact US' page.",
    },
    {
      question: "What if I need to edit my property listing?",
      answer: "Contact Admin by clicking at 'Contact US' ",
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
