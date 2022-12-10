import React from 'react'
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    AppBar, 
    Toolbar, 
    Item,
    Stack,
    AvatarGroup,
    Avatar,
    } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box  
    flex={2} 
    p={2}
    sx={{display: {xs:"none",sm:"block"}}}
    >
    <Box position={"block"}>
    <Typography variant='h6' fontWeight={100}>登録者</Typography>
    <AvatarGroup max={8}>
      <Avatar alt="松村" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Maruike Yudai" src="/static/images/avatar/2.jpg" />
      <Avatar alt="山本" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      <Avatar alt="demy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    </Box>
    
    </Box>
  )
}

export default Rightbar;