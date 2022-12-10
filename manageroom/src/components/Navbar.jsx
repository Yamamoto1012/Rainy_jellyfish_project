import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { display } from '@mui/system';
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>aiueo</Typography>
        <Search>search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;