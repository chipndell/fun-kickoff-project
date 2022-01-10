import React from 'react';
import useStyles from './useStyles';
import { LoggedInUserBase, LoggedInUserSidebarPanel } from './User';

const Availability: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <LoggedInUserBase />
      <LoggedInUserSidebarPanel />
    </>
  );
};

export default Availability;
