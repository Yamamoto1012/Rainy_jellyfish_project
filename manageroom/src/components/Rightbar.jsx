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
    } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box 
    bgcolor="lightcoral" 
    flex={2} 
    p={2}
    sx={{display: {xs:"none",sm:"block"}}}
    >
    Rightbar
    </Box>
  )
}

export default Rightbar;