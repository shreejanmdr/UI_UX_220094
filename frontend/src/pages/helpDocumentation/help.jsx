


import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';


const HowItWorks = () => {
  return (
    <Box pt={10} pb={5} bgcolor="#f9f9f9">
      {/* Heading Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#083775' }}>
          How Kurakani Works
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', mx: 'auto' }}
        >
          Your ultimate guide to using the Kurakani Chat App
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Step-by-Step Process */}
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 4, color: '#083775' }}>
          Step-by-Step Process
        </Typography>
        <Grid container spacing={4}>
          {/* Step 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Register"
                image="/assets/images/register-icon.png"
                sx={{ height: 100, width: 100, mx: 'auto', mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Register
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Create an account using your email and username. Your username is unique and cannot be changed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Login and Chat"
                image="/assets/images/login-icon.png"
                sx={{ height: 100, width: 100, mx: 'auto', mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Login and Chat
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Log in to Kurakani to access your chat dashboard. Start conversations instantly with your friends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Search and Connect"
                image="/assets/images/search-icon.png"
                sx={{ height: 100, width: 100, mx: 'auto', mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Search and Connect
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Use the search feature to find users. Send them friend requests and start chatting when they accept.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Step 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Create and Manage Groups"
                image="/assets/images/groups-icon.png"
                sx={{ height: 100, width: 100, mx: 'auto', mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Create and Manage Groups
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Start a group chat, add members, and manage your group. Only the group creator can edit settings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mt: 6, mb: 4, color: '#083775' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2575fc' }}>
                  Live Chat
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Communicate in real-time with typing indicators and instant message delivery.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2575fc' }}>
                  File Sharing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Send images, videos, audio files, and documents during chats.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2575fc' }}>
                  Emojis
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Express yourself with a wide variety of emojis in your messages.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ borderRadius: '16px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2575fc' }}>
                  Profile Customization
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Edit your profile to update your avatar, name, bio, and phone number.
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

