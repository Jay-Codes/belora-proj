import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ScanQRcode from './components/ScanQRCode'
import GenerateQRcode from './components/GenerateQRCode'
const Profile = () => {
  return (
    <Grid container spacing={3}>
      {/* Login Details */}
      {/* <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            // height: 240,
          }}
        >
          <LoginDetails />
        </Paper>
      </Grid> */}
      {/* Recent Deposits
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid> */}
      {/* Recent Orders */}
      
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <ScanQRcode/>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <SemesterDetails/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TimeTableDetails/>
        </Paper>
      </Grid> */}
    </Grid>
  )
}

export default Profile