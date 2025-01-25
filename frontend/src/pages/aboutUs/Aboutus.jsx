// import React from 'react';
// import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import './Aboutus.css';

// const Aboutus = () => {
//   return (
//     <Box pt={10} mt={1} bgcolor="##F5F5F5" pb={5}>
//       {/* Heading Section */}
//       <Box textAlign="center" mb={4} mt={1} >
//         <Typography variant="h3" color="primary" gutterBottom style={{ fontWeight: 'bold' }}>
//           About Us
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
//           A real estate management system, designed to make finding your desired property easier and more convenient.
//         </Typography>
//       </Box>

//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Image Section */}
//           <Grid item xs={12} md={6}>
//             <Card elevation={3} style={{ borderRadius: '12px', overflow: 'hidden' }}>
//               <CardMedia
//                 component="img"
//                 alt="About Us"
//                 image="/assets/images/register.png"
//                 style={{ borderRadius: '12px', height: '100%', objectFit: 'cover' }}
//               />
//             </Card>
//           </Grid>

//           {/* Content Section */}
//           <Grid item xs={12} md={6}>
//             <CardContent>
//               <Typography variant="h4" color="primary" gutterBottom style={{ fontWeight: 'bold' }}>
//                 Welcome to Estate Ease!
//               </Typography>
//               <Typography variant="body1" color="textSecondary" paragraph style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
//                 At our real estate management company, we are committed to offering our clients a diverse range of the latest and most innovative property solutions. Our journey has been extensive, giving us the expertise to provide you with premium quality services that are both efficient and cost-effective.
//               </Typography>
//             </CardContent>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Aboutus;


import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const HowItWorks = () => {
  return (
    <Box pt={10} pb={5} bgcolor="#f9f9f9">
      {/* Heading Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#083775" }}
        >
          How ForRent Works
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1.2rem",
            color: "#555",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Your ultimate guide to renting and managing properties on ForRent.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Step-by-Step Process */}
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, color: "#083775" }}
        >
          Step-by-Step Process
        </Typography>
        <Grid container spacing={4}>
          {/* Step 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Register"
                image="/assets/images/reg.jpg"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 1: Register
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Create an account with your name, email, and phone number to get started.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Login"
                image="/assets/images/log.png"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 2: Login and Explore
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Login to view available properties, manage your bookings, and access your wishlist.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Search Properties"
                image="/assets/images/search.png"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 3: Search Properties
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Use the search bar and filters to find properties that match your preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Book Property"
                image="/assets/images/bookaproperty.png"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 4: Book a Property
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Click "Book" on your chosen property and complete the booking form.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 5 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Payment"
                image="/assets/images/payment.png"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 5: Payment
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Choose "Pay Now" or "Pay on Arrival" to complete your booking process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 6 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Profile Management"
                image="/assets/images/edit.png"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 6: Manage Your Profile
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Update your profile details like name, phone number, and preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 7 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Forgot Password"
                image="/assets/images/opt.jpg"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 7: Forgot Password
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  If you forget your password, click "Forgot Password," receive an OTP, and reset it securely.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 8 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: "16px", textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Leave a Review"
                image="/assets/images/reviewrate.jpg"
                sx={{ height: 120, mx: "auto", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Step 8: Leave a Review
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Share your feedback about the property and help other users make informed decisions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;

