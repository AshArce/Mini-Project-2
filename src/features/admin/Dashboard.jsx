// Dashboard.js
import React from 'react';
import AdminNavigations from './AdminNavigations';
import { styled } from '@mui/system'; // Updated import statement

const Container = styled('div')`
  display: flex;
`;

const Sidebar = styled('div')`
  width: 250px; /* Adjust the width of the sidebar as needed */
  background-color: #333; /* Set the background color for the sidebar */
  color: white; /* Set text color for the sidebar */
`;

const Content = styled('div')`
  flex: 1;
  padding: 20px; /* Adjust padding as needed */
  background-color: #f0f0f0; /* Set background color for content */
  overflow-y: auto; /* Add vertical scroll if content overflows */
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <AdminNavigations />
      </Sidebar>
      <Content>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main dashboard content.</p>
        {/* Add other content and components here */}
      </Content>
    </Container>
  );
};

export default Dashboard;
