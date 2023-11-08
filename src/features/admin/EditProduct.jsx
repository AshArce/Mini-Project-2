import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AdminNavigations from './AdminNavigations';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';

const Container = styled('div')`
  display: flex;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 60px;
`;

function EditProduct() {
    const { productId } = useParams();
    console.log('Product ID:', productId);

    return (
        <Container>
            <AdminNavigations />
            <Content>
                {/* Add a link to navigate back to the Products page */}
                <Link to="/admin/products">Back to Products</Link>
                Edit your product here!
            </Content>
        </Container>
    );
}

export default EditProduct;
