import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const PopularPicks = (props) => {
  return (
    
    <Grid container
          direction={"column-reverse"}
          spacing={1}>
      <Grid container
             direction={'row'} 
             item xs={6}
             spacing={3}>
        <Grid item
               xs={6}>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "9px",
            borderRadius: "15px",
            height: "100px",
            width:'100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-end",
          }}
        >
          <div style={{
             display: "flex", 
             flexDirection: "column", 
             alignItems: "start", 
             justifyContent: "start",  
             marginTop: "209px"}}>

            <Typography 
            variant="p" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itemname}
            </Typography>
            <Typography 
            variant="h6" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itempcounter}
            </Typography>
            
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
          <Paper
          elevation={3}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "9px",
            borderRadius: "15px",
            height: "100px",
            width:'100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-end",
          }}
        >
          <div style={{
             display: "flex", 
             flexDirection: "column", 
             alignItems: "start", 
             justifyContent: "start",  
             marginTop: "209px"}}>

            <Typography 
            variant="p" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itemname}
            </Typography>
            <Typography 
            variant="h6" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itempcounter}
            </Typography>
            
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "9px",
            borderRadius: "15px",
            height: "100px",
            width:'100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-end",
          }}
        >
          <div style={{
             display: "flex", 
             flexDirection: "column", 
             alignItems: "start", 
             justifyContent: "start",  
             marginTop: "209px"}}>

            <Typography 
            variant="p" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itemname}
            </Typography>
            <Typography 
            variant="h6" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itempcounter}
            </Typography>
            
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "9px",
            borderRadius: "15px",
            height: "100px",
            width:'100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-end",
          }}
        >
          <div style={{
             display: "flex", 
             flexDirection: "column", 
             alignItems: "start", 
             justifyContent: "start",  
             marginTop: "209px"}}>

            <Typography 
            variant="p" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itemname}
            </Typography>
            <Typography 
            variant="h6" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#000000", }}>
              {props?.itempcounter}
            </Typography>
            
          </div>
        </Paper>
      </Grid>
    </Grid>

      <Grid item xs={6}>
        <Typography 
          variant="h3" 
          style={{ fontWeight: "bold", 
                   fontFamily: "Poppins", 
                   color: "#FFFFFF", 
                   fontSize: '2rem' }}>
          {props?.popularitem}
        </Typography>

        <Typography 
          variant="h2" 
          style={{ fontWeight: "bold", 
                   fontFamily: "Poppins", 
                   color: "#FFFFFF", 
                   maxWidth: "455px", 
                   fontSize: "3rem", 
                   lineHeight: "40px" }}>
          {props?.hottrendingon}
        </Typography>
        
        <Typography 
          variant="h6" 
          style={{ fontWeight: "bold", 
                   fontFamily: "Poppins", 
                   color: "#FFFFFF", 
                   maxWidth: "455px", 
                   fontSize: '1rem' }}>
          {props?.description}
        </Typography>

        <div style={{ display: "flex", 
                      flexDirection: "row", 
                      alignItems: "start", 
                      justifyContent: "start" }}>
          <Typography 
            variant="h6" 
            style={{ fontWeight: "bold", 
                     fontFamily: "Poppins", 
                     color: "#FFFFFF" }}>
            {props?.seeall}
          </Typography>

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
      <br/>
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
