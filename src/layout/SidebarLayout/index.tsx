import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  styled,
} from '@mui/material';
import StyledButton from './styledButton';
import Home from '../../Components/Tasks';
import Users from '../../Components/Users';
import Dashboard from '../../Components/Dashboard';

const sidebarStyle = {
  backgroundColor: 'rgba(144, 238, 144, 0.09)',
  minHeight: '100vh',
  color: '#000000',
  padding: '5px',
  boxShadow: '4px 0px 10px rgba(128, 128, 128, 0.25)',
};

const SideBarMenu = () => {
  const [index, setIndex] = useState(0);
  return (
    <Grid container>
      <Grid item xs={2.5} style={sidebarStyle}>
        <List component='div'>
          <ListItem component='div'>
            <StyledButton
              to='/home'
              number={0}
              index={index}
              setIndex={setIndex}>
              DashBorad
            </StyledButton>
          </ListItem>
          <ListItem component='div'>
            <StyledButton
              to='/home'
              number={1}
              index={index}
              setIndex={setIndex}>
              Task
            </StyledButton>
          </ListItem>
          <ListItem component='div'>
            {' '}
            <StyledButton
              to='/user'
              number={2}
              index={index}
              setIndex={setIndex}>
              Users
            </StyledButton>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={9.5}>
        {index === 0 && <Dashboard />}
        {index === 1 && <Home />}
        {index === 2 && <Users />}
      </Grid>
    </Grid>
  );
};

export default SideBarMenu;
