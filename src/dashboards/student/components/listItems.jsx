import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';
import { Person,BarChart,Layers,Notifications,School } from '@mui/icons-material';

export const MainListItems =({setCurrentPage,userDetails})=> { 
  const navigate = useNavigate()
  return(
  <React.Fragment>
    <ListItemButton onClick={()=>{
        setCurrentPage('Dashboard')
        navigate('/student')
      }} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={()=>{
        setCurrentPage('Profile')
        navigate('profile')
      }}>
      <ListItemIcon>
        <Person/>
      </ListItemIcon>
      <ListItemText primary="Profile"  />
    </ListItemButton>
    <ListItemButton onClick={()=>{
        setCurrentPage('Absencess')
        navigate('absentees')
      }}>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Absences" />
    </ListItemButton>
    <ListItemButton onClick={()=>{
        setCurrentPage('Notifcations')
        navigate('notifications')
      }}>
      <ListItemIcon>
        <Notifications/>
      </ListItemIcon>
      <ListItemText primary="Notifciations" />
    </ListItemButton>
    { userDetails && userDetails.role === 'Class-rep' &&
      <ListItemButton onClick={()=>{
          setCurrentPage('Class Rep')
          navigate('classrep')
        }}>
        <ListItemIcon>
          <School/>
        </ListItemIcon>
        <ListItemText primary="Class Rep" />
      </ListItemButton>
    }
  </React.Fragment>
);}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);