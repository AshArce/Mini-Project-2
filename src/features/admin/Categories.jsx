import React from 'react';
import AdminNavigations from './AdminNavigations';
import { Container, styled } from '@mui/system';

// Assuming StyledContainer and ContentContainer are custom styled components
const StyledContainer = styled(Container)`
  // Add your styles here
`;

const ContentContainer = styled(Container)`
  // Add your styles here
`;

const Categories = ({ products }) => {
  if (!products) {
    // Handle the case when products are undefined or null
    return (
      <StyledContainer>
        <AdminNavigations />
        <div>No products available.</div>
      </StyledContainer>
    );
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
                  {product.name} - {product.status} - {product.date}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ContentContainer>
    </StyledContainer>
  );
};

export default Categories;
