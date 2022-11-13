import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel, Select, InputLabel,FormControl,MenuItem } from '@mui/material';
import { useState, useEffect } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";




const ServiceDetails = ({app,currentUser,setSchoolDetailsComplete}) => {
  const [yearOfStudy, setYearOfStudy] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [schoolDetails , setSchoolDetails] = useState()
  const db = getFirestore(app);

  useEffect(()=>{
    if (currentUser)
    // ( async function loadData()
      {
        const docRef = doc(db, "Users", currentUser.uid);

        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            setSchoolDetails(docSnap.data())
          } else {
            console.log("No such document!");
          }
        })
      }
    // )();
    // if(schoolDetails)
    // setSchoolDetailsComplete(!(schoolDetails.phone!==null))
  },schoolDetails)

  const handleSubmit = async (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    const useRef = doc(db, "Users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(useRef,schoolDetails);
    setSchoolDetailsComplete(true)
  }
  const handleChange = (event) => {
    setYearOfStudy(event.target.value);
    handleYearOfStudyChange(event.target.value)
  };
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
    handleMajorChange(event.target.value)
  };

  function handleFnameChange(e){
    setSchoolDetails({...schoolDetails,fname:e.target.value})
  }
  function handleMnameChange(e){
    setSchoolDetails({...schoolDetails,mname:e.target.value})
  }
  function handleLnameChange(e){
    setSchoolDetails({...schoolDetails,lname:e.target.value})
  }
  function handleSchoolIdChange(e){
    setSchoolDetails({...schoolDetails,school_id:e.target.value})
  }
  function handleYearOfStudyChange(yr){
    setSchoolDetails({...schoolDetails,year_of_study:yr})
  }
  function handleMajorChange(major){
    setSchoolDetails({...schoolDetails,major:major})
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
                      onChange={handleFnameChange}
                      value = {schoolDetails ? schoolDetails.fname : ''}
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
                      onChange={handleMnameChange}
                      value = {schoolDetails ? schoolDetails.mname : ''}
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
                      onChange={handleLnameChange}
                      value = {schoolDetails ? schoolDetails.lname : ''}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="schoolid"
                      label="Your School ID"
                      name="schoolid"
                      autoComplete="schoolid"
                      autoFocus
                      onChange={handleSchoolIdChange}
                      value = {schoolDetails ? schoolDetails.school_id : ''}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="year">Year of Study</InputLabel>
                    <Select
                      labelId="yrofstdy"
                      id="yearofstudy"
                      // value={yearOfStudy}
                      label="Year of Study"
                      onChange={handleChange}
                      value = {schoolDetails ? schoolDetails.year_of_study : 1}
                    >
                      <MenuItem value={1}>FreshMan</MenuItem>
                      <MenuItem value={2}>Sophomore</MenuItem>
                      <MenuItem value={3}>Junior</MenuItem>
                      <MenuItem value={4}>Senior</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="major">Your Major Field of study</InputLabel>
                    <Select
                      labelId="major"
                      id="majorfield"
                      value = {schoolDetails ? schoolDetails.major : 'BBIT'}
                      label="Your Major Field Of Study"
                      onChange={handleChangeMajor}
                    >
                      <MenuItem value={'BBIT'}>BBIT</MenuItem>
                      <MenuItem value={'Software Eng.'}>Software Eng.</MenuItem>
                      <MenuItem value={'Networking'}>Networking</MenuItem>
                      <MenuItem value={'Business Administration'}>Business Administration</MenuItem>
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

export default ServiceDetails