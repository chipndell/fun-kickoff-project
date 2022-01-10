import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { User } from './pages/User/User';
import ProfilePicture from './pages/User/ProfilePicture';
import Settings from './pages/User/Settings';
import Security from './pages/User/Security';
import Payment from './pages/User/Payment';
import EditProfile from './pages/User/EditProfile';
import Availability from './pages/User/Availability';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <CssBaseline />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/profile" component={User} />
                <Route exact path="/edit_profile" component={EditProfile} />
                <Route exact path="/profile_picture" component={ProfilePicture} />
                <Route exact path="/availability" component={Availability} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/security" component={Security} />
                <Route exact path="/settings" component={Settings} />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
