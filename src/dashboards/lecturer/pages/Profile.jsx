import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Deposits from './components/Deposits';
import LoginDetails from './components/LoginDetails';
import SchoolDetails from './components/SchoolDetails'
import SemesterDetails from './components/SemesterDetails'
import TimeTableDetails from './components/TimeTableDetails'
import CoursesDetails from './components/CoursesDetails'
import { useState } from 'react'
import LectureTimeTable from './components/LectureTimeTable'
const Profile = ({app,currentUser,userDetails,setUserDetails}) => {
  const [loginComplete,setLoginComplete]=useState()
  const [schoolDetailsComplete,setSchoolDetailsComplete] = useState()
  const [schoolCoursesDetailsComplete,setCoursesDetailsComplete] = useState()
  const [timetableDetailsComplete,setTimetableDetailsComplete] = useState()
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
          <LoginDetails   app={app} currentUser = {currentUser} userDetails={userDetails} setUserDetails={setUserDetails} setLoginComplete={setLoginComplete}/>
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <SchoolDetails  app={app} currentUser={currentUser} userDetails={userDetails} setSchoolDetailsComplete={setSchoolDetailsComplete}/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <CoursesDetails app={app}  currentUser = {currentUser} userDetails={userDetails} setCoursesDetailsComplete={setCoursesDetailsComplete}/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* <LectureTimeTable/> */}
          <TimeTableDetails currentUser = {currentUser} setTimetableDetailsComplete={setTimetableDetailsComplete}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Profile