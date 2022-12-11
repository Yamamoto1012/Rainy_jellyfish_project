import React, { useRef } from 'react'
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
    Card,
    CardMedia,
    CardContent,
    CardActions,
    ListItemIcon,
    ListItem,
    ListItemButton,
    ListItemText,
    } from "@mui/material";
import { AccountBox, Home } from '@mui/icons-material';
// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getAuth ,onAuthStateChanged, signOut, updateProfile,} from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDsOwSbKGcevWf_NpnX3-nzWJc7ThcBBH4",
    authDomain: "kurageproject-apphack.firebaseapp.com",
    projectId: "kurageproject-apphack",
    storageBucket: "kurageproject-apphack.appspot.com",
    messagingSenderId: "289858188296",
    appId: "1:289858188296:web:08e08c2a99808cdc5a4dbd",
    measurementId: "G-09YV1Z8X0X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const MyPage = () => {
    const auth = getAuth();
    const inputUserNameRef = useRef(null);
    const [displayName,setDisplayName] = useState();
    const [displayNamelocal,setDisplayNameLocal] = useState();
    let isChangedProfilebool = false;
    let name = "namae"
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
    }

export const ProfileFeed = () => {
    const auth = getAuth();
    const [displayname ,setDisplayName] = useState();
    const inputUserNameRef = useRef(null);
    let isChangedProfilebool = false;
    onAuthStateChanged(auth, (user) => {
        if (user) {
  
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
        const SignOutFire = () =>{
          const auth = getAuth();
          signOut(auth).then(() => {
            // Sign-out successful.
            window.location.replace('../#');
          }).catch((error) => {
            // An error happened.
          });
        }
    
    return (
        <Box flex={4} p={2}>
        <Card sx={{ minWidth: 700 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Edit account
                </Typography>
                <Typography variant="h5" component="div">
                アカウント編集
                </Typography>
                <Typography sx={{ mb: 2.0 }} color="text.secondary">
                <ListItem disablePadding>
                    <ListItemButton compnent="" href="#home">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <h2>{displayname}</h2>
                    </ListItemButton>
                </ListItem>
                </Typography>
                <Typography variant="body2">
                アカウント名変更
                </Typography>
                
            </CardContent>
            <CardActions>
                <input type="text" placeholder="username" name="password" ref={inputUserNameRef}/> 
                <Button onClick={SaveProfile}>setusername</Button>
                <Button onClick={SignOutFire}>SignOut</Button>
            </CardActions>
            
            
    </Card>
    </Box>
    );
}

export default ProfileFeed;