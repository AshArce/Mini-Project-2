import React from "react";
import { Grid, Link, Paper, Typography } from "@mui/material";
import styles from '../features/Styles/landpagestyle';

const PopularPicks = (props) => {
  return (

    <Grid container
      direction={"column-reverse"}
      spacing={1}
      style={styles.PpRoot}>
      <Grid container
        direction={'row'}
        item xs={6}
        spacing={3}>
        <Grid item
          xs={6}>
          <Paper
            elevation={9}
            style={styles.PpItemPaper}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start"
            }}>

              <Typography variant="p"
                style={styles.PpTextP}>

                {props?.itemname}
              </Typography>
              <Typography
                variant="h6"
                style={styles.PpTextP}>
                {props?.itempcounter}
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            style={styles.PpItemPaper}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start"
            }}>

              <Typography
                variant="p"
                style={styles.PpTextP}>
                {props?.itemname}
              </Typography>
              <Typography
                variant="h6"
                style={styles.PpTextP}>
                {props?.itempcounter}
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            style={styles.PpItemPaper}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start"
            }}>

              <Typography
                variant="p"
                style={styles.PpTextP}>
                {props?.itemname}
              </Typography>
              <Typography
                variant="h6"
                style={styles.PpTextP}>
                {props?.itempcounter}
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}
            style={styles.PpItemPaper}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start"
            }}>

              <Typography
                variant="p"
                style={styles.PpTextP}>
                {props?.itemname}
              </Typography>
              <Typography
                variant="h6"
                style={styles.PpTextP}>
                {props?.itempcounter}
              </Typography>

            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#FFFFFF",
            fontSize: '2rem',
            padding: '1% 0'
          }}>
          {props?.popularitem}
        </Typography>

        <Typography variant="h2"
          style={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#FFFFFF",
            maxWidth: "455px",
            fontSize: "3rem",
            lineHeight: "40px",
            padding: '5% 0'
          }}>
          {props?.hottrendingon}
        </Typography>

        <Typography variant="h6"
          style={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#FFFFFF",
            maxWidth: "455px",
            fontSize: '1rem'
          }}>
          {props?.description}
        </Typography>

        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start"
        }}>
          <Link src="#">
            <Typography variant="h6" style={styles.PpSeeAll}>
              {props?.seeall}
            </Typography>
          </Link>
          {/* <img
            src="images/img_rightarrow1.png"
            alt="rightarrowOne"
            style={{ height: "5px", width: "5px", objectFit: "cover" }}
          /> */}

        </div>
      </Grid>
    </Grid>
  );
};

PopularPicks.defaultProps = {
  username: "Name of Item",
  userpcounter: "P 1299",
  itemname: "Name of Item",
  itempcounter: "P 1299",
  nameofitem: "Name of Item",
  pcounter: "P 1299",
  language: "Name of Item",
  pcounter1: "P 1299",
  popularitem: "Popular Item",
  hottrendingon: (
    <>
      Hot Trending
      <br />
      On This
      <br />
      Week.
      <br />
    </>
  ),
  description: (
    <>
      Various kinds of products that are trending. The trend will be reset every week. Don't miss out on the best items every week.
    </>
  ),
  seeall: "See All",
};

export default PopularPicks;
