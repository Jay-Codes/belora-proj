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
  const [school, setSchool] = React.useState('');
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setSchool(event.target.value);
  };
  const handleChangeMajor = (event) => {
    setDepartment(event.target.value);
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
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="department">Your School</InputLabel>
                    <Select
                      labelId="department"
                      id="majorfield"
                      value={school}
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
                      value={department}
                      label="Your Department"
                      onChange={handleChangeMajor}
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

export default ServiceDetails