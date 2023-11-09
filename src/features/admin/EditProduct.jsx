import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AdminNavigations from './AdminNavigations';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



//Content grid
const StyledContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-right: 60px;
`;

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const LeftContainer = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 20px;
  border: 1px solid #000; 
  padding: 10px; 
`;

const RightContainer = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-left: 20px;
  border: 1px solid #000; 
  padding: 10px;
`;

const InputField = styled(TextField)`
  && {
    margin-bottom: 16px; /* Adjust the margin-bottom as needed */
  }
`;

const ActionButtons = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const handleSave = () => {
  // Add your save logic here
  console.log('Save clicked');
};

const handleCancel = () => {
  // Add your cancel logic here
  console.log('Cancel clicked');
};


function EditProduct() {
    const { productId } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      // Handle the selected image, e.g., set it in the state
      setSelectedImage(file);
    };

    return (
      <StyledContainer>
      <AdminNavigations />
      <ContentContainer>
      <LeftContainer>
        {/* Image upload section */}
        <h2>Edit Product</h2>
        <label htmlFor="image-upload">Select Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
        {/* Display image preview if an image is selected */}
        {selectedImage && (
          <div>
            <h3>Image Preview:</h3>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Preview"
              style={{ maxWidth: '100%' }}
            />
          </div>
          )}
      </LeftContainer>
      <RightContainer>
        {/* Product details section */}
        <h2>Product Details</h2>
        <InputField
          label="Product Name"
          fullWidth
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Select
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          {/* Add your category options as MenuItem components */}
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          {/* Add more categories as needed */}
        </Select>
        <Select
          label="Color"
          fullWidth
          value={color}
          onChange={(e) => setColor(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          {/* Add your category options as MenuItem components */}
          <MenuItem value="color1">White</MenuItem>
          <MenuItem value="color2">Black</MenuItem>
          {/* Add more categories as needed */}
        </Select>
        <InputField
          label="Price"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputField
          label="Description"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </RightContainer>
      </ContentContainer>
      {/* Action buttons outside RightContainer */}
      <ActionButtons>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </ActionButtons>
    </StyledContainer>
    );
}

export default EditProduct;
