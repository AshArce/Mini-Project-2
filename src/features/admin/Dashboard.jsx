// Dashboard.js
import React, { useState, useEffect } from 'react';
import AdminNavigations from './AdminNavigations';
import { Box, styled } from '@mui/system'; // Updated import statement
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const Container = styled('div')`
  display: flex;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px; 
  margin-right: 60px;

`;

const userData = {
  totalUsers: 1000,
  sellers: 750,
  newSubs: 50,
};

const Dashboard = () => {

  // State to hold user data
  const [userStats, setUserStats] = useState(userData);

  // Simulate fetching data from an API
  useEffect(() => {
    // You can make an API call here to get the data
    // For this example, we'll update the state with a setTimeout to simulate data fetching
    const fetchData = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUserStats(userData); // Update the state with fetched data
    };

    fetchData();
  }, []);

  // Detect screen size using Material-UI's useMediaQuery
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  // Define font size based on screen size
  const titleFontSize = isSmallScreen ? '1.5rem' : '2rem';

  return (
    <Container>
        <AdminNavigations />
      <Content>
      <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="user-stats">

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className="stat-card">
            <Paper elevation={3} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" sx={{ fontSize: titleFontSize }}>Total Users</Typography>
              <Typography variant="body1">{userStats.totalUsers}</Typography>
            </Paper>
          </div>

          <div className="stat-card">
            <Paper elevation={3} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" sx={{ fontSize: titleFontSize }}>Seller</Typography>
              <Typography variant="body1">{userStats.totalUsers}</Typography>
            </Paper>
          </div>

          <div className="stat-card">
            <Paper elevation={3} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" sx={{ fontSize: titleFontSize }}>New Subscribers (Today)</Typography>
              <Typography variant="body1">{userStats.totalUsers}</Typography>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6">Recent Orders</Typography>
            {/* Add your list of recent orders here */}
          </Paper>
        </Grid>
      </Grid>
        

      </div>
    </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
