import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel, Select, InputLabel,FormControl,MenuItem } from '@mui/material';
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";


const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}
const SchoolDetails = ({app,currentUser,userDetails,setUserDetails : commitUpdates,setSchoolDetailsComplete}) => {
  const [ schoolDetails ,setSchoolDetails] = React.useState(userDetails ? {...userDetails} : { fname :'', mname:'',lname:'',school:'',department:''})
  const db = getFirestore(app);
  React.useEffect(()=>{
    if(userDetails && userDetails.fname !== ''&& schoolDetails.fname=='')
      setSchoolDetails(userDetails)
    if(schoolDetails)
      if(Object.keys(schoolDetails).length === 0)
        setSchoolDetails(userDetails)
  },[userDetails])
  function handleChange(e){
    setSchoolDetails({...schoolDetails,school:e.target.value})
  }
  function handleDepartmentChange(e){
    setSchoolDetails({...schoolDetails,department:e.target.value})
  }
  function handleFnameChange(e){
    setSchoolDetails({...schoolDetails,fname:e.target.value})
  }
  function handleMnameChange(e){
    setSchoolDetails({...schoolDetails,mname:e.target.value})
  }
  function handleLnameChange(e){
    setSchoolDetails({...schoolDetails,lname:e.target.value})
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const useRef = doc(db, "Users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(useRef,schoolDetails);
    setSchoolDetailsComplete(true)
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
            <Title>School Details</Title>
            <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="firstname"
                      label="Your First Name"
                      name="firstname"
                      autoComplete="firstname"
                      autoFocus
                      value = {schoolDetails ? schoolDetails.fname : ''}
                      onChange={handleFnameChange}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="firstname"
                      label="Your Middle Name"
                      name="middlename"
                      autoComplete="middlename"
                      autoFocus
                      value ={schoolDetails ? schoolDetails.mname : ''}
                      onChange={handleMnameChange}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lasttname"
                      label="Your Last Name"
                      name="lastname"
                      autoComplete="lastname"
                      autoFocus
                      value = {schoolDetails ? schoolDetails.lname : ''}
                      onChange={handleLnameChange}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="department">Your School</InputLabel>
                    <Select
                      labelId="department"
                      id="majorfield"
                      value={schoolDetails ? schoolDetails.school : ''}
                      label="Your School"
                      onChange={handleChange}
                    >
                      <MenuItem value={'Business'}>Business</MenuItem>
                      <MenuItem value={'Science and Technology'}>Science and Technology</MenuItem>
                      <MenuItem value={'Nursing'}>Nursing</MenuItem>
                      <MenuItem value={'Humanities'}>Humanties</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="department">Your Department</InputLabel>
                    <Select
                      labelId="department"
                      id="majorfield"
                      value={schoolDetails ? schoolDetails.department : ''}
                      label="Your Department"
                      onChange={handleDepartmentChange}
                    >
                      <MenuItem value={'Business'}>Business</MenuItem>
                      <MenuItem value={'Science and Technology'}>Science and Technology</MenuItem>
                      <MenuItem value={'Nursing'}>Nursing</MenuItem>
                      <MenuItem value={'Humanities'}>Humanties</MenuItem>
                    </Select>
                  </FormControl>
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

export default SchoolDetails