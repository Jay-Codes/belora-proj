import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel, Select, InputLabel,FormControl,MenuItem } from '@mui/material';
import Table from './Table'


const subjects = [{}]
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
            <Title>Courses Details</Title>
            <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="course_code_enter"
                      label="Enter the course Code"
                      name="course_code"
                      autoComplete="course_code"
                      autoFocus
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="course_code_group"
                      label="Enter the Group You Will Lecture"
                      name="course_code"
                      autoComplete="course_code"
                      autoFocus
                    />
                </Grid>
                
                <Grid item xs={12} md={8} lg={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                    Add
                    </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Table data={subjects}/>
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