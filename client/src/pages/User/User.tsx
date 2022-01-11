import React from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAuth } from '../../context/useAuthContext';
import { Navbar } from '../../components/Navbar/Navbar';

const User: React.FC = () => {
  const history = useHistory();
  const { loggedInUser } = useAuth();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return <Navbar />;
};

export { User };
