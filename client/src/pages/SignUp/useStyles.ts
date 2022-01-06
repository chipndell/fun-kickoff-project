import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    rounded: true,
    padding: 50,
  },
  typograph: {
    textAlign: 'center',
    paddingTop: 25,
  },
  linkstyle: {
    paddingLeft: 15,
  },
  formstyle: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
