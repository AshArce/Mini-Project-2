// Dashboard.js
import React from 'react';
import AdminNavigations from './AdminNavigations';
import { styled } from '@mui/system'; // Updated import statement

const Container = styled('div')`
  display: flex;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 60px;
`;

const Products = () => {
  return (
    <Container>
        <AdminNavigations />
      <Content>
        <h1>Welcome to Products</h1>
        <p>This is the main ptoducts content.</p>
        {/* Add other content and components here */}
      </Content>
    </Container>
  );
};

export default Products;
