const styles = {
  fpButton: {
    borderRadius: "20px",
    padding: "5% 10%",
  },
  fpItem: {
    position: "absolute",
    right: "0px",
    bottom: "30px",
    height: "300px",
    width: "300px",
    zIndex: "0",
  },
  PpRoot: {
    paddingTop: "20%",
  },
  PpItemPaper: {
    backgroundColor: "#FFFFFF",
    padding: "9px",
    borderRadius: "15px",
    height: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-end",
  },
  PpTextP: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#000000",
  },
  PpSeeAll: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#FFFFFF",
  },
  "@media (max-width: 600px)": {
    fpButton: {
      padding: "2% 50%", // Adjusted padding for smaller screens
      color: "#a37d68",
    },
  },
};

export default styles;
