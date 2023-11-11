import React, { useState } from 'react'
import AdminNavigations from './AdminNavigations'
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



const Categories = ({ products }) => {
  if (!products) {
    // Handle the case when products are undefined or null
    return <div>No products available.</div>;
  }

  // Categorize products based on their category
  const categorizedProducts = {};
  products.forEach((product) => {
    if (!categorizedProducts[product.category]) {
      categorizedProducts[product.category] = [];
    }
    categorizedProducts[product.category].push(product);
  });

  return (
    <StyledContainer>
      <AdminNavigations />
      <ContentContainer>
        {/* Display products in different categories */}
        {Object.entries(categorizedProducts).map(([category, categoryProducts]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {categoryProducts.map((product) => (
                <li key={product.id}>
                  {/* Display product information */}
                  {product.name} - {product.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ContentContainer>
    </StyledContainer>
  );
};

export default Categories