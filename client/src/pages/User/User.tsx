import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { Box, Typography, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { Navbar } from '../../components/Navbar/Navbar';

const LoggedInUserBase: React.FC = () => {
  const history = useHistory();
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return <Navbar />;
};

const LoggedInUserSidebarPanel: React.FC = () => {
  return (
    <Box position="fixed" left="10%" mt="10%" p="10">
      <Box display="flex" mt="50" flexDirection="column" alignItems="center" justifyContent="center">
        <ListItemText>
          <Link to="/edit_profile">Edit Profile</Link>
        </ListItemText>
        <ListItemText>
          <Link to="/profile_picture">Profile Picture</Link>
        </ListItemText>
        <ListItemText>
          <Link to="/availability">Availability</Link>
        </ListItemText>
        <ListItemText>
          <Link to="/payment">Payment</Link>
        </ListItemText>
        <ListItemText>
          <Link to="/security">Security</Link>
        </ListItemText>
        <ListItemText>
          <Link to="/settings">Settings</Link>
        </ListItemText>
      </Box>
    </Box>
  );
};

const User: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} component={Paper} square>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="column">
          <LoggedInUserBase />
        </Box>
        <Box flexDirection="column">
          <LoggedInUserSidebarPanel />
          <Box position="fixed" right="35%" mt="5%" maxWidth="500">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Paper className={classes.paper} elevation={6}>
                <Box alignSelf="center">
                  <Grid container>
                    <Grid item xs>
                      <Typography className={classes.welcome} align="center" component="h1" variant="h5">
                        Welcome back!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box display="flex" justifyContent="center"></Box>
                </Box>
                <Box p={1} alignSelf="center" />
              </Paper>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export { User, LoggedInUserBase, LoggedInUserSidebarPanel };
