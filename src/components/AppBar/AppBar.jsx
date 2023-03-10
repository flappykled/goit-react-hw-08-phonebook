import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};