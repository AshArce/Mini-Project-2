// import { Paper, styled } from "@mui/material";

// item
// export const Item = styled(Paper)(() => ({
//   backgroundColor: 'transparent',
//   textAlign: 'center',
// }));

// Popular Picks

const styles = {
  popText: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  },

  //App Bar
  appBar: {
    backgroundColor: "transparent",
    color: "green",
  },

  greenBoxBg: {
    height: "auto",
    backgroundColor: "#39A848",
  },

  container: {
    position: "relative",
    // backgroundColor: 'theme.palette.common.white',
    display: "flex",
    border: "1px solid #000",
    height: 250,
    width: 300,
    borderRadius: 30,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    insetX: 0,
    marginLeft: "auto",
    marginRight: "auto",
    objectFit: "cover",
    borderRadius: 52,
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 39,
    height: 108,
    alignItems: "start",
    maxWidth: 773,
    marginLeft: -263,
    marginTop: 23,
    zIndex: 1,
  },
  description: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    maxWidth: 773,
    fontSize: "12px",
    // color: theme.palette.light_green[900],
  },
  button: {
    // color: theme.palette.common.white,
    fontWeight: "bold",
    fontFamily: "Poppins",
    display: "flex",
    justifyContent: "center",
    textTransform: "none",
    paddingLeft: 11,
    paddingRight: 2,
    borderRadius: 7,
    fontSize: "10px",
    textAlign: "center",
    width: 101,
  },
  //Images
  ladyShopping: {
    width: "130px",
    height: "130px",
  },
  RegisterBoxVector: {
    display: "flex",
    bottom: "-35px",
    alignItems: "end",
    position: "absolute",
    width: "300x",
    height: "250px",
    borderRadius: 50,
  },
};

export default styles;
