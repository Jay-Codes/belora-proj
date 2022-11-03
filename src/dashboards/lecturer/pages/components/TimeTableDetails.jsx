import React from 'react'
import { useState } from 'react'
import Title from './Title'
import { Stack, Chip,Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel, Select, InputLabel,FormControl,MenuItem } from '@mui/material';
import Table from './Table'
import LectureTimeTable  from './LectureTimeTable';


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

  const courses = [{course_id:0,course_name:'BBIT'},{course_id:1,course_name:'Software ENG'},{course_id:3,course_name:'Networking'},{course_id:4,course_name:'Business Administration .Marketing'},]
  const [selectedCourse , setSelectedCourse] = useState(0)
  const [yearOfStudy, setYearOfStudy] = React.useState('');
  const [major, setMajor] = React.useState('');

  const handleChange = (event) => {
    setYearOfStudy(event.target.value);
  };
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };
  const handleSelect =(course) => {
    setSelectedCourse(course.course_id)
  }
  return (
    <div>
        <Container component="main" >
            <CssBaseline />
            <Title>TimeTable Details</Title>
            {/* <Stack direction="row" spacing={1} style={{padding: 10, overflow: 'auto'}}>
              {courses.map((course,index)=>(course.course_id)===selectedCourse ? <Chip label={course.course_name}  onClick={()=>{handleSelect(course)}} /> : <Chip label={course.course_name} variant="outlined" onClick={()=>{handleSelect(course)}} />)}
            </Stack> */}
             <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                  {/* <Table data={subjects}/> */}
                  <LectureTimeTable/>
                </Grid>
                 
                {/* <Grid item xs={12} md={8} lg={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                    Save
                    </Button>
                </Grid> */}
            </Grid>
          </Container>
    </div>
  )
}

export default ServiceDetails