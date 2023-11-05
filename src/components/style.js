import { Paper, styled } from "@mui/material";


//item
export const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
}));

// Popular Picks


export const styles = {
  popText:{
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '600',
    wordWrap: 'break-word'
  },

//App Bar
  appBar:{
    backgroundColor: 'transparent',
    color: 'green'
  },
  
  greenBoxBg:{
    height: 'auto',
    backgroundColor: '#39A848'
  }
}