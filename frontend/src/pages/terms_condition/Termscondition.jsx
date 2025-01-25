import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TermsCondition = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: 3,
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", maxWidth: 1700, padding: 4 ,marginTop: 5}}>
        <Container>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2, color: "#083775", textAlign: "center" }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            This website is not for you unless you are willing to follow and
            accept our Policies and Conditions. Estate Ease is referred to in
            all instances within these Terms and Conditions.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Use Limitations Section */}
          <Typography variant="h5" sx={{ color: "#2575fc", mb: 2 }}>
            <SecurityIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Use Limitations
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="You understand that our website and the Services are vulnerable to interruption, damage, destruction, and limitation of functioning attacks." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Unless we give you explicit permission, you may not use any automated program to access our Services; instead, you must access them manually." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="You promise that you will not do anything illegal, unethical, or damaging to our business while using our Services." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Using our Services in a way that violates our policies or any other notice posted on our website is strictly prohibited." />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Registration Section */}
          <Typography variant="h5" sx={{ color: "#2575fc", mb: 2 }}>
            <GavelIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Registration and Safeguarding
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            Verify that the information you submit during registration is
            genuine, accurate, up-to-date, and comprehensive. Any changes to
            the information you supplied during registration must be promptly
            communicated to us. A few of the Services necessitate registration
            so we can confirm your identity, while other sections of our
            website are accessible to everybody who visits without
            registration.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* General Section */}
          <Typography variant="h5" sx={{ color: "#2575fc", mb: 2 }}>
            <ContactMailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            General
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            The section headers provided in this agreement are for reference
            only and should not be construed as having any legal or contractual
            effect. We are free to transfer all or part of our rights and
            responsibilities under these Terms and Conditions to another entity
            at any moment without giving you prior notice. Any rights you may
            have under these terms and conditions cannot be assigned,
            transferred, or sublicensed. In the event that we do not immediately
            take action in response to a breach by you or any third party, our
            delay or inability to do so will not be interpreted as a waiver of
            our right to act. Any violation of these Terms and Conditions that
            is not our fault and is instead the result of events outside our
            control will not make us liable.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            This Privacy Policy and these Terms and Conditions replace any and
            all previous agreements or understandings between us and you in
            relation to the Services.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            Please feel free to contact us at{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#2575fc" }}
            >
              ForRent@gmail.com
            </Typography>{" "}
            or by calling{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#2575fc" }}
            >
              9850089916 / 01-4770259
            </Typography>{" "}
            with any inquiries or feedback on our Terms & Conditions.
          </Typography>

                 {/* <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            "&:hover": { background: "#2575fc" },
            display: "block",
            mx: "auto",
          }}
        >
          Contact Us
        </Button> */}
        </Container>
      </Paper>
    </Box>
  );
};

export default TermsCondition;
