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

export const Sidebar = () => {
  return (
    <Box 
        bgcolor="skyblue" 
        flex={1}
        p={2}
        sx={{display: {xs:"none",sm:"block"}}}
        >
        Sidebar
        </Box>
    )
}

export default Sidebar;