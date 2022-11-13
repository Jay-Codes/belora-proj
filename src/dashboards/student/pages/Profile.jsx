import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Deposits from './components/Deposits';
import LoginDetails from './components/LoginDetails';
import ServiceDetails from './components/ServiceDetails';
import SchoolDetails from './components/SchoolDetails'
import SemesterDetails from './components/SemesterDetails'
import TimeTableDetails from './components/TimeTableDetails'
import { useState } from 'react'
const Profile = ({app,currentUser}) => {
  const [loginComplete,setLoginComplete] = useState()
  const [schoolDetails, setSchoolDetails] = useState()
  return (
    <Grid container spacing={3}>
      {/* Login Details */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            // height: 240,
          }}
        >
          <LoginDetails app={app} currentUser={currentUser} setLoginComplete={setLoginComplete}/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <SchoolDetails app={app}  currentUser={currentUser} setSchoolDetailsComplete={setSchoolDetails}/>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <SemesterDetails app={app}  currentUser={currentUser} />
        </Paper>
      </Grid> */}
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TimeTableDetails app={app}  currentUser={currentUser} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Profile