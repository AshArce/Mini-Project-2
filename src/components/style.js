import { Paper, styled } from "@mui/material";



//item
export const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
}));

// Popular Picks
export const popPicItem={
  height: 'auto',
  padding: '50px',
  backgroundColor: '#39A848'
};  

export const popText={
  color: 'white',
  fontFamily: 'Poppins',
  fontWeight: '600',
  wordWrap: 'break-word'
}