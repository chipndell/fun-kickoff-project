import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    paddingTop: 23,
  },
  welcome: {
    fontSize: 26,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
  },
  paper: {
    rounded: true,
    padding: 50,
  },
}));

export default useStyles;
