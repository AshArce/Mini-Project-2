import React from "react";
import { Paper, Typography, List, ListItem, Grid } from "@mui/material";

const TopSelling = (props) => {
  return (
    <Grid >
      <Grid style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }}>

        <Grid style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100%",
          alignItems: "start",
          justifyContent: "start",
          width: "100%"
        }}>

          <Typography variant="h3"
            style={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: "#FFFFFF",
              fontSize: '2rem'
            }}>
            {props?.salestext}
          </Typography>

          <Typography variant="h1"
            style={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: "#FFFFFF",
              maxWidth: "455px",
              fontSize: "64px",
              lineHeight: "80px"
            }}>
            {props?.topsellingtext}
          </Typography>

          <Typography variant="h6"
            style={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: "#FFFFFF",
              maxWidth: "455px"
            }}>
            {props?.preparetext}
          </Typography>

          <Grid style={{
            display: "flex",
            flexDirection: "row",
            gap: "2.5",
            alignItems: "start",
            justifyContent: "start",
            width: "auto"
          }}>

            <Typography variant="h6"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "#FFFFFF"
              }}>
              {props?.seealltext}
            </Typography>

            <img src="images/img_rightarrow1.png" alt="rightarrowOne_One" style={{ height: "5px", width: "5px", objectFit: "cover" }} />

          </Grid>
        </Grid>

        <List style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          orientation: "vertical"
        }}>
          <ListItem
            style={{
              justifyContent: 'center'
            }}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "9px",
                borderRadius: "15px",
                height: "100px",
                width: '250px',
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Grid style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start"
              }}>

                <Typography
                  variant="p"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color: "#000000",
                  }}>
                  {props?.nameitemtext}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color: "#000000",
                  }}>
                  {props?.pricecounter}
                </Typography>

              </Grid>
            </Paper>
          </ListItem>

          <ListItem style={{
            justifyContent: 'center'
          }}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "9px",
                borderRadius: "15px",
                height: "100px",
                width: '250px',
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "flex-end",
              }}
            >
              <Grid style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start"
              }}>

                <Typography
                  variant="p"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color: "#000000",
                  }}>
                  {props?.nameitemtext}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color: "#000000",
                  }}>
                  {props?.pricecounter}
                </Typography>

              </Grid>
            </Paper>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

TopSelling.defaultProps = {
  salestext: "Sales",
  topsellingtext: (
    <>
      Top Selling
      <br />
      Items.
    </>
  ),
  preparetext: "Prepare for Halloween with our spooktacular costumes and accessories, ensuring a memorable holiday!",
  seealltext: "See All",
  nameitemtext: "Name of Item",
  pricecounter: "P 1299",
  nameitemtext2: "Name of Item",
  pricecounter2: "P 1299",
};

export default TopSelling;
