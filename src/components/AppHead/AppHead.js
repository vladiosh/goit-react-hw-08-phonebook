import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { AppBar, Toolbar } from '@mui/material';

export const AppHead = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="sticky">
      <Toolbar component="nav">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
