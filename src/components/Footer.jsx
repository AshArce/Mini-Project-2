import React from "react";
import { Button, Typography, Link, Grid, Box, List, ListItem, TextField } from "@mui/material";
// import * as styles from './style'
import styles from "./footerstyle";



const Footer = (props) => {
  return (

    <Grid
      container
      textAlign={'center'}
      spacing={0}
      sx={styles.FooterRoot}
    >

      <Grid
        item
        xs={6}
        md={3}

      >
        <Typography>
          SHOP
        </Typography>

        <List>
          <ListItem sx={styles.FooterListItem}>
            <Link>Home</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Category</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>All Products</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Cart</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Account</Link>
          </ListItem>

        </List>

      </Grid>

      <Grid item
        xs={6}
        md={3}

        style={{ marginLeft: '0' }}
      >
        <Typography>
          HELP
        </Typography>

        <List>
          <ListItem sx={styles.FooterListItem}>
            <Link>Contact Us</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>FAQs</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Accesibility</Link>
          </ListItem>
        </List>

      </Grid>
      <Grid item
        xs={6}
        md={3}

        style={{ marginLeft: '0' }}
      >
        <Typography>
          SUPPORT
        </Typography>

        <List>
          <ListItem sx={styles.FooterListItem}>
            <Link>Order Status</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Courier</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Delivery</Link>
          </ListItem>
          <ListItem sx={styles.FooterListItem}>
            <Link>Returns</Link>
          </ListItem>
        </List>

      </Grid>
      <Grid item
        xs={6}
        md={3}

        style={{ marginLeft: '0' }}
      >
        <Typography>
          SUBSCRIBE
        </Typography>
        <Typography>
          Subscribe to get 10% off your first order
        </Typography>
        <Box>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            sx={styles.emailInput}
          ></TextField>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={styles.subscribeButton}
          >
            SUBSCRIBE
          </Button>

        </Box>

      </Grid>
      <Grid item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        <Typography>
          Follow us on:
        </Typography>
        <img src="#" alt="facebook" />
        <img src="#" alt="youtube" />
        <img src="#" alt="instagram" />
        <img src="#" alt="twitter" />
        <img src="#" alt="googleplus" />
      </Grid>
      <Grid item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        {props?.copyright}
      </Grid>
    </Grid>
  );
};

Footer.defaultProps = {
  copyright: "© 2023 Kartcheck. All Rights Reserved ."
};

export default Footer;
