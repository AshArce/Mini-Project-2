import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import styles from './style';

const RegisterBox = (props) => {
  return (
    <Box style={styles.root}>
      <Box style={styles.container}>
        <Paper style={styles.imageContainer}>
          <img
            style={styles.image}
            src="./images/RegisterBoxVector.svg"
            alt="rectangleSeventyOne"
          />
        </Paper>
        <Box style={styles.textContainer}>
          {props.description && (
            <Typography style={styles.description}>
              {props.description}
            </Typography>
          )}
          {props.buttontext && (
            <Button style={styles.button} variant="contained">
              {props.buttontext}
            </Button>
          )}
        </Box>
      </Box>
      {props.rectanglefortyseven && (
        <img
          style={styles.rectangleImage}
          src={props.rectanglefortyseven}
          alt="rectangleFortySeven"
        />
      )}
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