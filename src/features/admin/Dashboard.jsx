import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ backgroundColor: "#d0e7d2", display: "flex", flexDirection: "column", paddingRight: "20px" }}>
      <Box sx={{ alignSelf: "center", width: "100%", maxWidth: "1318px" }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/594a1722-ee11-4aee-94c1-b1431460a284?apiKey=2248ac225c054733a88431577effa739&"className="img"
              alt="Description of the image"
              sx={{
                aspectRatio: "0.31",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                fill: "#79ac78",
                filter: "drop-shadow(5px 0px 10px rgba(0, 0, 0, 0.25))",
                overflow: "hidden",
                flexGrow: 1,
                marginTop: { xs: "40px", md: 0 },
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: "flex", flexDirection: "column", lineHeight: "normal", marginLeft: { xs: 0, md: "20px" } }}>
              <Box sx={{ display: "flex", marginTop: { xs: "40px", md: "80px" }, flexDirection: "column" }}>
                <Typography variant="h2" sx={{ color: "#000", alignSelf: "start", whiteSpace: "nowrap", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "30px" }}>
                  Hello, Admin Name
                </Typography>
              </Box>
              <Box sx={{ alignSelf: "start", display: "flex", width: "100%", maxWidth: "100%", flexGrow: 1, flexDirection: "column", marginTop: { xs: "40px", md: "119px" }, marginLeft: "10px" }}>
                <Box sx={{ alignSelf: "start", display: "flex", width: "100%" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                  </Box>
                </Box>
                <Box sx={{ alignSelf: "start", display: "flex", width: "100%" }}>
                  <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, alignItems: "stretch" }}>
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                    <Box sx={{ backgroundColor: "#fff", display: "flex", width: "100%", height: "224px" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}


export default Dashboard



