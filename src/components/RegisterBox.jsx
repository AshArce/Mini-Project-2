import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import styles from '../features/Styles/style';

const RegisterBox = (props) => {
  return (

    <Box style={styles.container}>

      <Box>
        <Paper style={styles.imageContainer}>

          <img
            style={styles.ladyShopping}
            src={'./images/ladyShopping.png'}
            alt="rectangleFortySeven"
          />
          <img
            style={styles.RegisterBoxVector}
            src="./images/RegisterBoxVector.svg"
            alt="rectangleSeventyOne"
          />
        </Paper>
        <Box style={styles.textContainer}>
          <Typography style={styles.description}>
            {props.description}
          </Typography>


          <Button style={styles.button} variant="contained">
            Create now
          </Button>

        </Box>
      </Box>
    </Box>

  );
};

RegisterBox.defaultProps = {
  description: (
    <>
      Join us for exclusive deals and <br />
      personalized shopping. <br />
      Create your account now!
    </>
  ),
  createaccount: "Create Account",
};

export default RegisterBox;