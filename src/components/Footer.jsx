import React from "react";
import { styled } from "@mui/system";
import { Button, Typography, Link } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "start",
  margin: "0 11px",
  width: "95%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    gap: "5px",
    marginLeft: "0",
    width: "100%",
  },
}));

const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.5px",
  height: "auto",
  alignItems: "flex-start",
  justifyContent: "start",
  width: "auto",
  [theme.breakpoints.up("md")]: {
    marginLeft: "0",
    [theme.breakpoints.up("md")]: {
      marginLeft: "123px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "99px",
    },
  },
}));

const SupportColumn = styled("div")(({ theme }) => ({
  marginLeft: "171px",
  [theme.breakpoints.up("md")]: {
    marginLeft: "0",
    width: "100%",
  },
}));

const SubscribeColumn = styled("div")(({ theme }) => ({
  marginLeft: "3px",
  marginTop: "69px",
  [theme.breakpoints.up("md")]: {
    marginLeft: "0",
    width: "100%",
  },
}));

const SubscribeText = styled("div")(({ theme }) => ({
  marginTop: "13px",
}));

const SocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "25px",
  alignItems: "end",
  justifyContent: "start",
  marginLeft: "695px",
  marginTop: "5px",
  width: "auto",
  [theme.breakpoints.up("md")]: {
    marginLeft: "0",
  },
}));

const Line = styled("hr")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "1px",
  marginTop: "72px",
  width: "100%",
}));

const Copyright = styled("div")(({ theme }) => ({
  marginLeft: "381px",
  marginTop: "26px",
}));

const Footer = (props) => {
  return (
    <Root>
      <Column>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          SHOP
        </Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Category
        </Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Home
        </Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Mens
        </Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Womens
        </Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Kids
        </Typography>
      </Column>
      <Column>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          HELP
        </Typography>
        <Link href="javascript:" className="font-bold font-poppins text-base text-gray-600 w-auto">
          <Typography>Contact Us</Typography>
        </Link>
        <Link href="javascript:" className="font-bold font-poppins text-base text-gray-600 w-auto">
          <Typography>FAQs</Typography>
        </Link>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">
          Accessibility
        </Typography>
      </Column>
      <SupportColumn>
        <Link href="javascript:" className="font-bold font-poppins text-base text-gray-600 w-auto">
          <Typography>SUPPORT</Typography>
        </Link>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">Order Status</Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">Courier</Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">Delivery</Typography>
        <Typography className="font-bold font-poppins text-base text-gray-600 w-auto">Returns</Typography>
      </SupportColumn>
      <SubscribeColumn>
        <Typography className="font-bold font-poppins text-base text-gray-600">SUBSCRIBE</Typography>
        <SubscribeText>
          Subscribe to get 10% off your first order
        </SubscribeText>
        <div>
          <Typography className="font-bold font-poppins ml-5 my-auto text-gray-600 text-xs">
            Enter your e-mail
          </Typography>
          <div>
            <Button
              className="cursor-pointer font-bold font-poppins h-39px leading-normal rounded-19px text-base text-center w-155px"
              color="primary"
              size="small"
              variant="contained"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <Typography className="font-bold font-poppins text-base text-gray-600">
          Follow us on:
        </Typography>
      </SubscribeColumn>
      <SocialIcons>
        <img className="h-19px w-5" src="images/img_facebook.png" alt="facebook" />
        <img className="h-19px w-5" src="images/img_youtube.png" alt="youtube" />
        <img className="h-19px w-5" src="images/img_instagram.png" alt="instagram" />
        <img className="h-19px w-5" src="images/img_twitter.png" alt="twitter" />
        <img className="h-19px w-5" src="images/img_googleplus.png" alt="googleplus" />
      </SocialIcons>
      <Line />
      <Copyright>
        {props?.copyright}
      </Copyright>
    </Root>
  );
};

Footer.defaultProps = { copyright: "© 2023 Kartcheck. All Rights Reserved ." };

export default Footer;
