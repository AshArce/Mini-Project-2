// Popular Picks

const styles = {
  popText: {
    color: "white",
    fontWeight: "600",
    wordWrap: "break-word",
  },

  //App Bar
  appBar: {
    backgroundColor: "transparent",
    color: "green",
    boxShadow: "none",
  },

  container: {
    position: "relative",
    // backgroundColor: "theme.palette.common.white",
    display: "flex",
    height: 250,
    width: 300,
    borderRadius: 20,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: " end",
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    insetX: 0,
    marginLeft: "auto",
    marginRight: "auto",
    objectFit: "cover",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: 39,
    height: 108,
    alignItems: "start",
    maxWidth: 773,
    marginLeft: 20,
    marginTop: 23,
    zIndex: 3,
  },
  description: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    maxWidth: 773,
    fontSize: "1.1rem",
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
    backgroundColor: "green",
  },
  //Images
  ladyShopping: {
    display: "flex",
    width: "150px",
    height: "150px",
    zIndex: 2,
  },
  RegisterBoxVector: {
    display: "flex",
    bottom: "-40px",
    position: "absolute",
    width: "300x",
    height: "250px",
    borderRadius: 50,
  },

  //Dashboard

  dashboardContainer: {
    display: "flex",
  },
  sidebar: {
    width: "250px", // Adjust the width of the sidebar as needed
    backgroundColor: "#333", // Set the background color for the sidebar
    color: "white", // Set text color for the sidebar
  },
  dashboardContent: {
    flex: 1,
    padding: "20px", // Adjust padding as needed
    backgroundColor: "#f0f0f0", // Set background color for content
    overflowY: "auto", // Add vertical scroll if content overflows
  },
};

export default styles;
