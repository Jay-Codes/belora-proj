import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LoginDetails from './components/LoginDetails';
import SchoolDetails from './components/SchoolDetails'
import TimeTableDetails from './components/TimeTableDetails'
import CoursesDetails from './components/CoursesDetails'
import { Stack,Chip } from '@mui/material'
import { useState } from 'react'
import AttendanceTable from './components/AttendanceTable'

const courses = [{course_id:0,course_name:'BBIT'},{course_id:1,course_name:'Software ENG'},{course_id:3,course_name:'Networking'},{course_id:4,course_name:'Business Administration .Marketing'},]


const Attendance = () => {
    const [selectedCourse , setSelectedCourse] = useState(0)
    const handleSelect =(course) => {
        setSelectedCourse(course.course_id)
      }
  return (
    <Grid container spacing={3}>
        <Stack direction="row" spacing={1} style={{padding: 10, overflow: 'auto'}}>
          {courses.map((course,index)=>(course.course_id)===selectedCourse ? <Chip label={course.course_name}  onClick={()=>{handleSelect(course)}} /> : <Chip label={course.course_name} variant="outlined" onClick={()=>{handleSelect(course)}} />)}
        </Stack>
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
            <AttendanceTable/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Attendance