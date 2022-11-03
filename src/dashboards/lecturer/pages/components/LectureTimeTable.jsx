import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(code, course_name,mon,tue,wed,thur,fri,sun) {
  return { code, course_name ,mon,tue,wed,thur,fri,sun};
}
const timeTable = [
  {code:0, course_name :'Adventist Heritage',mon:'11:00 - 12:30',tue: '',wed: '11:00 - 12:30',thurs: '',fri: '11:00 - 12:30',sun: ''},
  {code:1, course_name :'Data Structructers and Algorithms',mon:'9:30 - 11:00',tue: '',wed: '9:30 - 11:00',thurs: '',fri: '11:00 - 12:30',sun:'9:30 - 11:00'},
  {code:2, course_name :'Fundamentals of Programming',mon:'',tue: '8:00 - 9:00',wed: '',thurs: '8:00 - 9:00',fri: '',sun: ''},
]

let rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const handleRemoveCourse = (course_code)=>{
  console.log('removed course')
}
export default function BasicTable({data}) {
  rows=[]
  timeTable.forEach((course)=>rows.push(createData(course.code,course.course_name,course.mon,course.tue,course.wed,course.thurs,course.fri,course.sun)))
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ display: "table-header-group" }}>
          <TableRow>
            <TableCell>Course Code</TableCell>
            {/* <TableCell align="right" sx={{maxWidth:50}}>Course Code</TableCell>  */}
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Mon</TableCell>
            <TableCell align="right">Tue</TableCell>
            <TableCell align="right">Wed</TableCell>
            <TableCell align="right">Thurs</TableCell>
            <TableCell align="right">Fri</TableCell>
            <TableCell align="right">Sun</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell  align="right">{row.course_name}</TableCell>
              <TableCell  align="right">{row.mon}</TableCell>
              <TableCell  align="right">{row.tue}</TableCell>
              <TableCell  align="right">{row.wed}</TableCell>
              <TableCell  align="right">{row.thurs}</TableCell>
              <TableCell  align="right">{row.fri}</TableCell>
              <TableCell  align="right">{row.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
