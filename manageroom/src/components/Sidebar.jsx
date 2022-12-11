import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    } from "@mui/material";
import { 
    Home,
    AccountBox,
    Settings,
    AutoStories
    } from '@mui/icons-material';


    
export const Sidebar = () => {
return (
    <Box flex={1} p={2} sx={{display: {xs:"none",sm:"block"}}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton compnent="a" href="#home">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>
            <ListItemButton compnent="a" href="Profile">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton compnent="a" href="#Settings">
                <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
            <ListItemButton compnent="a" href="#Recod">
                <ListItemIcon>
                        <AutoStories/>
                    </ListItemIcon>
                <ListItemText primary="Recod" />
            </ListItemButton>
        </List>
    </Box>
    )
}

export default Sidebar;