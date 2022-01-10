import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React from 'react';
import useStyles from './useStyles';
import { LoggedInUserBase, LoggedInUserSidebarPanel } from './User';

interface Props {
  handleSubmit: ({
    first_name,
    last_name,
    gender,
    date_of_birth,
    email,
    phone,
    address,
    about_you,
  }: {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: Date;
    email: string;
    phone: string;
    address: string;
    about_you: string;
  }) => void;
}

const EditProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <LoggedInUserBase />
      <LoggedInUserSidebarPanel />
      {() => (
        <form className={classes.form} noValidate>
          <TextField
            id="first_name"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />
          <TextField
            id="last_name"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="last_name"
            autoComplete="last_name"
            autoFocus
          />
          <TextField
            id="gender"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="gender"
            autoComplete="gender"
            autoFocus
          />
          <TextField
            id="date_of_birth"
            label={<Typography className={classes.label}>Date of Birth</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="date_of_birth"
            autoComplete="date_of_birth"
            autoFocus
          />
          <TextField
            id="email"
            label={<Typography className={classes.label}>Email</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            id="phone_number"
            label={<Typography className={classes.label}>Phone Number</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="phone_number"
            autoComplete="phone_number"
            autoFocus
          />
          <TextField
            id="location"
            label={<Typography className={classes.label}>Location</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="location"
            autoComplete="location"
            autoFocus
          />
          <TextField
            id="about_you"
            label={<Typography className={classes.label}>Describe yourself</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="about_you"
            autoComplete="about_you"
            autoFocus
          />

          <Box textAlign="center" marginTop={5}>
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}></Button>
          </Box>
          <Box height={95} />
        </form>
      )}
    </>
  );
};

export default EditProfile;
