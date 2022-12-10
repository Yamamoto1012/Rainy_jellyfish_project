import React, { useState } from 'react'
import { getAuth, onAuthStateChanged ,updateProfile,signOut} from "firebase/auth";
import { useRef } from 'react';
import {
  Box,
  Button,
  Stack
} from "@mui/material";
import styled from "@emotion/styled";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Navbar from './Navbar';

export const MyPage = () => {
    const auth = getAuth();
    const inputUserNameRef = useRef(null);
    const [displayName,setDisplayName] = useState();
    const [displayNamelocal,setDisplayNameLocal] = useState();
    let isChangedProfilebool = false;

    //FirbaseAuthの情報を取得
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        const username = user.displayName;
        
        setDisplayName(username);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    const SaveProfile =() =>{
    updateProfile(auth.currentUser, {
            displayName:  inputUserNameRef.current.value
          }).then((userCredential) => {
            // Profile updated!
            const user = auth.currentUser;
            const username = user.displayName;
            setDisplayName(username);
            isChangedProfilebool = true;
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            
          });
            
    }
    const SignOut = () =>{
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        window.location.replace('../#');
      }).catch((error) => {
        // An error happened.
      });
    }

    const TextButton = styled(Button)`
      text-transform: none;
    `;
    
    const BlueButton = styled(Button) ({
      backgroundColor:"skyblue",
          color:"#888",
          margin:5,
          "&:hover": {
            backgroundColor:"lightblue"
          },
    })
  return (
      <div>   
        <Box>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
          </Stack>
        </Box>  
        <h1>Hi,{displayName}!</h1>
        <input type="text" placeholder="username" name="password" ref={inputUserNameRef}/> 
        <button onClick={SaveProfile}>setusername</button>
        <h2>アカウント処理</h2>
        <button onClick={SignOut}>SignOut</button>
    </div>
  )
}

export default MyPage;