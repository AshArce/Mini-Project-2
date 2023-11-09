import React from "react";
import { Button, Typography, Link, Grid } from "@mui/material";
import * as style from './style'



const Footer = (props) => {
  return (

    <Grid container spacing={2}>
      <Grid item
        xs={6}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        <Typography>
          SHOP
        </Typography>
        <Typography>
          Category
        </Typography>
        <Typography>
          Home
        </Typography>
        <Typography>
          Mens
        </Typography>
        <Typography>
          Womens
        </Typography>
        <Typography>
          Kids
        </Typography>
      </Grid>
      <Grid item
        xs={6}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        <Typography>
          HELP
        </Typography>
        <Link href="javascript:">
          <Typography>Contact Us</Typography>
        </Link>
        <Link href="javascript:">
          <Typography>FAQs</Typography>
        </Link>
        <Typography>
          Accessibility
        </Typography>
      </Grid>
      <Grid item
        xs={6}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        <Link href="javascript:" >
          <Typography>SUPPORT</Typography>
        </Link>
        <Typography >Order Status</Typography>
        <Typography >Courier</Typography>
        <Typography >Delivery</Typography>
        <Typography >Returns</Typography>
      </Grid>
      <Grid item
        xs={6}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
        <Typography >SUBSCRIBE</Typography>
        <Typography>
          Subscribe to get 10% off your first order
        </Typography>
        <div>
          <Typography >
            Enter your e-mail
          </Typography>
          <div>
            <Button
              color="primary"
              size="small"
              variant="contained"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <Typography >
          Follow us on:
        </Typography>
      </Grid>
      <Grid item
        xs={12}
        md={12}
        lg={12}
        style={{ marginLeft: '0' }}
      >
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
