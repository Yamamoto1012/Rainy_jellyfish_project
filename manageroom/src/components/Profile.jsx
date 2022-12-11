import React from "react";
import styled from "@emotion/styled";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Navbar from './Navbar';
import Profilefeed from "./Profilefeed";
import {
    Box,
    Button,
    Stack
} from "@mui/material";

export const Profile = () => {
    return (
        <div>
            <Box>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar/>
                <Profilefeed/>
                <Rightbar/>
              </Stack>
            </Box>
        </div>
      )
}



export default Profile;