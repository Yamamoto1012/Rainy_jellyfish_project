import { AppBar, styled, Toolbar, Typography} from '@mui/material';
import { display } from '@mui/system';
import React, { useRef, useState } from 'react'
import { getAuth, onAuthStateChanged ,updateProfile,signOut} from "firebase/auth";

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
}

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
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}></Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;