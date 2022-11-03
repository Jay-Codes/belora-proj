import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button } from '@mui/material'
import {Delete } from '@mui/icons-material'

function createData(code, course_name,credit_hours) {
  return { code, course_name, credit_hours};
}

const rows = [
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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Course Code</TableCell> */}
            <TableCell align="right">Course Code</TableCell> 
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Unit Group</TableCell>
            <TableCell align="right">Credit Hours</TableCell>
            <TableCell align="right">Actions</TableCell>
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
              <TableCell align="right">{row.course_name}</TableCell>
              <TableCell align="right">{row.unit_group}</TableCell>
              <TableCell align="right">{row.credit_hours}</TableCell>
              <TableCell align="right"><Button variant="outlined" onClick={()=>{handleRemoveCourse(row.code)}}><Delete/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
