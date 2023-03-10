import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};