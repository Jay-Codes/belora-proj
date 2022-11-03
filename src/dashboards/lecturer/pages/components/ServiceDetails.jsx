import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel } from '@mui/material';



const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}
const ServiceDetails = () => {
  return (
    <div>
        <Container component="main" >
            <CssBaseline />
            <Title>Service Details</Title>
            <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="location"
                      label="Location/Area in Bara Cee"
                      name="location"
                      autoComplete="location"
                      autoFocus
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="work_hours"
                      label="Work Hours"
                      placeholder='8:00 - 21:00'
                      id="workhrs"
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControlLabel
                    control={<Checkbox value="active" color="primary" />}
                    label="Active ?"
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

export default ServiceDetails