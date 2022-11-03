import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel, Select, InputLabel,FormControl,MenuItem } from '@mui/material';



const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}
const ServiceDetails = () => {
  const [yearOfStudy, setYearOfStudy] = React.useState('');
  const [major, setMajor] = React.useState('');

  const handleChange = (event) => {
    setYearOfStudy(event.target.value);
  };
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };
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
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="year">Year of Study</InputLabel>
                    <Select
                      labelId="yrofstdy"
                      id="yearofstudy"
                      value={yearOfStudy}
                      label="Year of Study"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>FreshMan</MenuItem>
                      <MenuItem value={2}>Sophomore</MenuItem>
                      <MenuItem value={3}>Junior</MenuItem>
                      <MenuItem value={3}>Senior</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="major">Your Major Field of study</InputLabel>
                    <Select
                      labelId="major"
                      id="majorfield"
                      value={major}
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