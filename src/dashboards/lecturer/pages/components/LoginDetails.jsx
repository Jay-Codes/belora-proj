import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel } from '@mui/material';
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'



const LoginDetails = ({app,currentUser,userDetails,setUserDetails : commitUpdates,setLoginComplete}) => {
  const [ loginDetails ,setUserDetails] = React.useState(userDetails ? {...userDetails}: {email:'',phone:''})
  React.useEffect(()=>{
    if(!loginDetails && userDetails)
      setUserDetails(userDetails)
    if(loginDetails && userDetails &&userDetails.email !== loginDetails.email && loginDetails.email==='')
      setUserDetails(userDetails)
  },[userDetails])
  const db = getFirestore(app);
  function handleEmailChange(e){
    setUserDetails({...loginDetails,email:e.target.value})
  }
  function handlePasswordChange(e){
    setUserDetails({...loginDetails,email:e.target.value})
  }
  function handlePhoneChange(e){
    setUserDetails({...loginDetails,phone:e.target.value})
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const useRef = doc(db, "Users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(useRef,loginDetails);
    setLoginComplete(true)
    const docRef = doc(db, "Users", currentUser.uid);

        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            commitUpdates(docSnap.data())
          } else {
            console.log("No such document!");
          }
        })
}
  return (
    <div>
        <Container component="main" >
            <CssBaseline />
            <Title>Login Details</Title>
            <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type='email'
                      autoComplete="email"
                      autoFocus
                      value ={loginDetails ? loginDetails.email : ' '}
                      onChange={handleEmailChange}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handlePasswordChange}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="tel"
                      autoComplete="tell"
                      autoFocus
                      value ={loginDetails ? loginDetails.phone : ' '}
                      onChange={handlePhoneChange}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                    Save
                    </Button>
                </Grid>
            </Grid>
          </Container>
    </div>
  )
}

export default LoginDetails